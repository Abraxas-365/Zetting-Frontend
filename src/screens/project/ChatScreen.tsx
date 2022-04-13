

import React from 'react';
import { Button, Image, SafeAreaView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native'
import BottonsLoginScreen from '../components/BottonsLoginScreen';


const ChatScreen = () => {
    return (
        <SafeAreaView style={styleChatScreen.fondo}>

            <View style={{ alignSelf: 'center', justifyContent: 'center', top: '30%' }}>
                <Text style={styleChatScreen.slogan}>CHAT</Text>
            </View>
        </SafeAreaView>
    );
};

export default ChatScreen;



export const styleChatScreen = StyleSheet.create({
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
