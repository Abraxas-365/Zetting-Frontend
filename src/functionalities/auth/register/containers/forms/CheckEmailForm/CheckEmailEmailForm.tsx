import I18n from 'i18n-js';
import React from 'react';
import { View } from 'react-native';
import CustomButton from '../../../../../../components/Buttons/CustomButton';
import CustomStakeHold from '../../../../../../components/Stakeholders/CustomStakeHold';
import { COLORS } from '../../../../../../themes/colors/ZettingColors';
import { FONTS } from '../../../../../../themes/fonts/ZettingFonts';
import { useForm } from '../../../../../share/hooks/useForm';
import { styles } from './style'

const CheckEmailEmailForm = () => {
    const { email, onChange } = useForm({
        email: '',
    })
    return (
        <View>
            <CustomStakeHold
                boxWrapper={styles.textInputWrapper}
                textInputStyle={styles.textInput}
                textInputProps={{
                    keyboardType: 'email-address',
                    onChangeText: (value) => { onChange(value, 'email') },
                    placeholder: I18n.t("Auth.YourEmail"),
                    placeholderTextColor: COLORS.black,
                }} />

            {/*submit*/}
            <CustomButton
                text={I18n.t("Auth.SignIn")}
                styleContainer={styles.submitButton}
                styleText={{
                    fontSize: 20,
                    fontFamily: FONTS.mainFont
                }}

            />
        </View>
    );
};

export default CheckEmailEmailForm;
