

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native'
import { RootStackParamList } from '../../navigator/StackNavigator';
import { styleBackgrounds } from '../../themes/Backgrounds';
import { styleTitles } from '../../themes/Titles';

interface Props extends StackScreenProps<RootStackParamList, 'ProyectoScreen'> { }
const ProyectoScreen = ({ route }: Props) => {
    let project = route.params.project
    return (
        <SafeAreaView style={styleBackgrounds.fondoDark}>
            <View style={{ alignSelf: 'center', justifyContent: 'center', top: '10%' }}>
                <Text style={styleTitles.titleTextLight}>{project!.name}</Text>
            </View>
        </SafeAreaView>
    );
};

export default ProyectoScreen;



export const styleProyectoScreen = StyleSheet.create({

})
