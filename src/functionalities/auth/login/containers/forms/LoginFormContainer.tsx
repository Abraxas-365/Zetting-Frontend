import I18n from 'i18n-js';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../../../../../components/Buttons/CustomButton';
import CustomStakeHold from '../../../../../components/Stakeholders/CustomStakeHold';
import { COLORS } from '../../../../../themes/colors/ZettingColors';
import { FONTS } from '../../../../../themes/fonts/ZettingFonts';
import { useForm } from '../../../../share/hooks/useForm';
import { UserLogin } from '../../model';
import { styles } from './style'

//TODO: function to connect to the back
const LoginFormContainer = () => {
    const { email, password, onChange } = useForm({
        email: '',
        password: '',
    })
    const user: UserLogin = {
        email: email,
        password: password
    }
    return (
        <View >
            {/*email*/}
            <CustomStakeHold
                boxWrapper={styles.textInputWrapper}
                textInputStyle={styles.textInput}
                textInputProps={{
                    keyboardType: 'email-address',
                    onChangeText: (value) => { onChange(value, 'email') },
                    placeholder: I18n.t("YourEmail"),
                    placeholderTextColor: COLORS.black,
                }} />

            {/*password*/}
            <CustomStakeHold
                boxWrapper={[{ marginTop: '10%' }, styles.textInputWrapper]}
                textInputStyle={styles.textInput}
                textInputProps={{
                    secureTextEntry: true,
                    keyboardAppearance: 'dark',
                    onChangeText: (value) => { onChange(value, 'password') },
                    placeholder: I18n.t("Password"),
                    placeholderTextColor: COLORS.black,
                }} />

            {/*submit*/}
            <CustomButton
                text="Sign In"
                styleContainer={styles.submitButton}
                styleText={{
                    fontSize: 20,
                    fontFamily: FONTS.mainFont
                }}

            />


        </View>
    );
};

export default LoginFormContainer;
