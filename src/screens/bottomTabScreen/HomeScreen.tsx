
import React from 'react';
import { Button, Image, SafeAreaView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native'
import BottonsLoginScreen from '../components/BottonsLoginScreen';


const HomeScreen = () => {
    return (
        <SafeAreaView style={styleLoginScreen.fondo}>

            <View style={{ alignSelf: 'center', justifyContent: 'center', top: '30%' }}>
                <Text style={styleLoginScreen.slogan}>HOME</Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;



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
