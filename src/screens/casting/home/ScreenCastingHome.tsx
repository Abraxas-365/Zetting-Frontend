import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styleBackground, stylesText, styleWrappers } from '../../../themes/styles';

const ScreenCastingHome = () => {
    return (
        <SafeAreaView style={styleBackground.darkBackground}>
            <View style={styleWrappers.frameWrapper}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[stylesText.titleLight]}>CASTING</Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default ScreenCastingHome;
