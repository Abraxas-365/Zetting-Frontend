import React, { useContext, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import RNPickerSelect from 'react-native-picker-select';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { Features, Profession, User, UserContact } from '../../interfaces/appInterfaces';
import { styleWrappers } from '../../themes/Wrappers';
import CustomCenterBotton from '../buttons/CustomCenterBotton';
import MyCheckbox from '../checkbox/CheckBox';
import StakeHolders from '../stakeHolds/StakeHolders';
interface FormProps {
    email: string
}

const RegisterForm = ({ email }: FormProps) => {
    console.log('---RegisterForm---', email);
    const phoneInput = useRef<PhoneInput>(null);
    const [formattedValue, setFormattedValue] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [professions, setProfessions] = useState("");
    //aqui acumular los botones de profesiones
    // var professions: string[] = ["hola"]
    const { name, identifierDocument, password, onChange } = useForm({

        name: '',
        identifierDocument: '',
        password: '',
    })
    const { signUp } = useContext(AuthContext);
    const onSingUpBotton = async () => {
        console.log('register')
        var features: Features = {}
        var contact: UserContact = {
            phone: phone,
            email: email,
            country: country,
            identifierDocument: ''
        }
        var profession: Profession = { name: professions }
        var user: User = {
            name: name.trim(),
            contact: contact,
            profession: profession,
            password: password.trim(),
            verified: false,
            features: features

        }
        signUp(user)

    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView style={{ top: '8%', flex: 1, ...styleWrappers.wrapperHorizontalGap }} contentContainerStyle={{ paddingBottom: 90 }} >
                <StakeHolders texto='Name' top='0%' stakeHold={onChange} stakeHoldText={name} valueText='name' color='#23232B' />
                <View style={{
                    borderBottomColor: '#23232B',
                    borderBottomWidth: 1,
                    marginTop: '10%',
                    height: 82,

                }}>
                    <Text style={{ color: '#23232B', marginBottom: 10 }}>Phone Number</Text>

                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={phone}
                        defaultCode="PE"
                        layout="first"
                        onChangeText={(text) => {
                            setPhone(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        containerStyle={{ backgroundColor: '#E6E4F5' }}
                        textContainerStyle={{ backgroundColor: '#E6E4F5' }}

                        codeTextStyle={{ backgroundColor: '#E6E4F5' }}
                    />
                </View>

                <View style={{
                    borderBottomColor: '#23232B',
                    borderBottomWidth: 1,
                    marginTop: '10%',
                    height: 80,

                }}>
                    <Text style={{ color: '#23232B', marginBottom: 30 }}>Country</Text>

                    <RNPickerSelect
                        onValueChange={(country) => console.log(setCountry(country))}
                        placeholder={{ label: "Select Country" }}
                        items={[
                            { label: 'Peru', value: 'peru' },
                            { label: 'Aldea de la oja', value: 'baseball' },
                            { label: 'Ether', value: 'ether' },
                        ]}
                        style={{ inputIOS: { fontSize: 16 } }}
                    />
                </View>
                <View style={{
                    borderBottomColor: '#23232B',
                    borderBottomWidth: 1,
                    marginTop: '10%',
                    height: 80,

                }}>
                    <Text style={{ color: '#23232B', marginBottom: 30 }}>Profession</Text>

                    <RNPickerSelect
                        //TODO: Add a function to load professions from the db
                        onValueChange={(professions) => console.log(setProfessions(professions))}
                        placeholder={{ label: "Select Profession" }}
                        items={[
                            { label: 'Actor', value: 'actor' },
                            { label: 'Musico', value: 'striper' },
                        ]}
                        style={{ inputIOS: { fontSize: 16 } }}
                    />
                </View>

                <StakeHolders texto='Password' stakeHold={onChange} stakeHoldText={password} valueText='password' color='#23232B' />

                <View style={styles.section}>
                    <MyCheckbox />
                    <View style={{ width: '60%', flexDirection: 'row' }}>
                        <Text style={styles.paragraph}>I have read and agree to the
                            <Text style={styles.paragraphOrange}> Privacy Policy</Text>
                            <Text style={styles.paragraph}>{'\n'}Our</Text><Text style={styles.paragraphOrange}> Terms</Text>
                            <Text style={styles.paragraph}> and </Text><Text style={styles.paragraphOrange}> Conditions</Text>
                        </Text>
                    </View>
                </View>
                <CustomCenterBotton onPress={() => onSingUpBotton()} text='Register' top='8%' />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default RegisterForm
const styles = StyleSheet.create({
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'coral',
        backgroundColor: 'transparent',
    },

    checkboxChecked: {
        backgroundColor: 'coral',
    },
    section: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '15%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        color: '#23232B',
        fontSize: 10,
    },

    paragraphOrange: {
        color: '#FF7F39',
        fontSize: 10,
    },
    checkbox: {
        borderRadius: 5,
        margin: 8,
        color: 'red'
    },
});
