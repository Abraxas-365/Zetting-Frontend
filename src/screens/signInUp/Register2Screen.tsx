

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import RegisterForm from '../../components/forms/RegisterForm';
import { RootStackParamList } from '../../navigator/StackNavigator';
import { styleBackgrounds } from '../../themes/Backgrounds';
import { styleTitles } from '../../themes/Titles';
import { styleWrappers } from '../../themes/Wrappers';

interface Props extends StackScreenProps<RootStackParamList, 'Register2Screen'> { }
const Register2Screen = ({ route }: Props) => {
    console.log('Register2Screen')
    console.log("email", route.params.email);

    return (
        <SafeAreaView style={styleBackgrounds.fondoLight}>
            <View style={{ ...styleWrappers.wrapperTitles }}>
                <Text style={{ ...styleTitles.titleTextDark, alignSelf: 'center' }}>REGISTER</Text>
            </View>


            <RegisterForm email={route.params.email} />


        </SafeAreaView>
    )
};

export default Register2Screen;

