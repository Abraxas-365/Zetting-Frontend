

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../navigator/StackNavigator';
import Register2Screen from '../screens/Register2Screen';

import { apiCalls } from "../api/apiCalls";

type BottonProps = {
    onPress: any
    text: string
}



const CustomBotton = ({ onPress, text }: BottonProps) => {


    return (
        <TouchableOpacity
            style={style.boton}
            onPress={onPress}>
            <Text style={style.botonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    boton: {
        alignSelf: 'center',
        width: '50%',
        position: 'absolute',
        backgroundColor: '#FF7F39',
        borderRadius: 40,
        justifyContent: 'center',
    },
    botonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    }

})
export default CustomBotton;
