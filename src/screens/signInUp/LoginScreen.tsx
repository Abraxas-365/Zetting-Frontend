import React from 'react';
import { Button, Image, SafeAreaView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native'
import BottonsLoginScreen from '../../components/buttons/BottonsLoginScreen';

const LoginScreen = () => {
    return (
        <SafeAreaView style={styleLoginScreen.fondo}>

            <View style={{ alignSelf: 'center', justifyContent: 'center', top: '30%' }}>
                <Text style={styleLoginScreen.slogan}>DISFRUTA LA</Text>
                <Text style={styleLoginScreen.slogan}>EXPERIENCIA</Text>
                <Text style={styleLoginScreen.slogan}>CON</Text>
                <Text style={styleLoginScreen.slogan}>NOSOTROS</Text>
            </View>
            <BottonsLoginScreen bottom='10%' />
        </SafeAreaView>
    );
};

export default LoginScreen;



export const styleLoginScreen = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#23232B',
    },
    slogan: {
        fontSize: 40,
        color: '#E5E1F6',
        fontWeight: 'bold'
    }

})
