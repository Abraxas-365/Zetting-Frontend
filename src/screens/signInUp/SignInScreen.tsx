
import React, { useContext, useEffect } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BottonsPlatforms from '../../components/buttons/ButtonPlatform';
import CustomCenterBotton from '../../components/buttons/CustomCenterBotton';
import StakeHolders from '../../components/stakeHolds/StakeHolders';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { styleBackgrounds } from '../../themes/Backgrounds';
import { styleTitles } from '../../themes/Titles';
import { styleWrappers } from '../../themes/Wrappers';

const SignInScreen = () => {

    const { email, password, onChange } = useForm({
        email: '',
        password: '',
    })

    const { signIn, errorMessage, removeError } = useContext(AuthContext);
    useEffect(() => {
        if (errorMessage == null) return;
        Alert.alert('Login incorrecto', errorMessage, [{ text: 'Ok', onPress: removeError }])
    }, [errorMessage])

    const onLoginBotton = async (email: string, password: string) => {
        console.log('register')

        signIn(email, password)

    }

    return (
        <SafeAreaView style={styleBackgrounds.fondoLight}>
            <View style={{ ...styleWrappers.wrapperTitles }}>
                <Text style={{ ...styleTitles.titleTextDark, alignSelf: 'center' }}>LOG IN</Text>
            </View>

            <View style={{ ...styleWrappers.wrapperHorizontalGap, marginTop: '5%' }}>
                <StakeHolders texto="Your Email" keyboardType='email-address' stakeHold={onChange} stakeHoldText={email} valueText='email' color='#23232B' />
                <StakeHolders texto="Password" stakeHold={onChange} stakeHoldText={password} valueText='password' secureTextEntry={true} color='#23232B' />
                <CustomCenterBotton onPress={() => onLoginBotton(email, password)} text="Sign in" />

                <BottonsPlatforms marginTop={50} />

            </View>
        </SafeAreaView>
    )
};

export default SignInScreen;

