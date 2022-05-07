import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styleBackground, stylesText, styleWrappers } from '../../../../themes/styles';

const ScreenNewProject = () => {
    return (
        <SafeAreaView style={styleBackground.darkBackground}>
            <View style={styleWrappers.frameWrapper}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[stylesText.titleLight, { alignSelf: 'center' }]}>NEW PROJECT</Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default ScreenNewProject;
