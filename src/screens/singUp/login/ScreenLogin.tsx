import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import SocialMediaButtonsContainer from '../../../functionalities/auth/login/containers/buttons';
import LoginFormContainer from '../../../functionalities/auth/login/containers/forms';
import { styleBackground, stylesText, styleWrappers } from '../../../themes/styles';


const ScreenLogin = () => {
    return (
        <SafeAreaView style={styleBackground.lightBackground}>
            <View style={styleWrappers.frameWrapper}>
                <Text style={stylesText.titleDark}>LOG IN</Text>

                <LoginFormContainer />
                <SocialMediaButtonsContainer styleContainer={{ marginTop: '20%' }} />

            </View>
        </SafeAreaView>
    );
};

export default ScreenLogin;
