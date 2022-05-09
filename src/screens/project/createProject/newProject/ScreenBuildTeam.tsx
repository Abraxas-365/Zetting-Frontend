import I18n from 'i18n-js';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styleBackground } from '../../../../themes/styles';

const ScreenBuildTeam = () => {
    return (
        <View style={{ ...styleBackground.orangeBackground, flex: 2 }}>

            <SafeAreaView>
                <Text>{I18n.t("Project.Build")}</Text>

            </SafeAreaView>
            <View style={styleBackground.darkBackground}>

            </View>
        </View>
    );
};

export default ScreenBuildTeam;
