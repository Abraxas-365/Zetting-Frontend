import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import SocialMediaButtonsContainer from '../../../functionalities/auth/login/containers/buttons';
import CheckEmailEmailForm from '../../../functionalities/auth/register/containers/forms';
import { styleBackground, stylesText, styleWrappers } from '../../../themes/styles';

const ScreenCheckEmail = () => {
    return (
        <SafeAreaView style={styleBackground.lightBackground}>
            <View style={styleWrappers.frameWrapper}>
                <Text style={[stylesText.titleDark, { marginBottom: '10%', alignSelf: "center" }]}>REGISTER</Text>
                <CheckEmailEmailForm />
                <SocialMediaButtonsContainer styleContainer={{ marginTop: '20%' }} />

            </View>
        </SafeAreaView>
    );
};

export default ScreenCheckEmail;
