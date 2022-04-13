
import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BottonsPlatforms from '../../components/buttons/ButtonPlatform';
import CustomCenterBotton from '../../components/buttons/CustomCenterBotton';
import StakeHolders from '../../components/stakeHolds/StakeHolders';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { styleBackgrounds } from '../../themes/Backgrounds';
import { styleTitles } from '../../themes/Titles';
import { styleWrappers } from '../../themes/Wrappers';

const RegisterScreen = () => {

    const { email, onChange } = useForm({
        email: ''
    })
    const { registerIn } = useContext(AuthContext);
    const onRegisterBotton = async () => {
        console.log('register')

        registerIn(email.trim())

    }
    return (
        <SafeAreaView style={styleBackgrounds.fondoLight}>
            <View style={{ ...styleWrappers.wrapperTitles }}>
                <Text style={{ ...styleTitles.titleTextDark, alignSelf: 'center' }}>REGISTER</Text>
            </View>

            <View style={{ ...styleWrappers.wrapperHorizontalGap }}>
                <StakeHolders top="15%" texto="Your Email" keyboardType='email-address' stakeHold={onChange} stakeHoldText={email} valueText='email' color='#23232B' />

                <CustomCenterBotton onPress={() => onRegisterBotton()} text='Continue' />

                <BottonsPlatforms marginTop={50} />
            </View>
        </SafeAreaView>
    )
};

export default RegisterScreen;


