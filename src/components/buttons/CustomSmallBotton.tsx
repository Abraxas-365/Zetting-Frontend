import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type BottonProps = {
    onPress?: any
    top?: string
    borderColor?: string
    width?: number
    height?: number
    color?: string
    text?: string
}
const CustomSmallBotton = ({ onPress = () => { }, top, borderColor, color, text = 'texto' }: BottonProps) => {
    return (
        <TouchableOpacity style={{ ...style.botton, marginTop: top, backgroundColor: color, borderColor: borderColor }}
            onPress={onPress}>
            <Text style={{ ...style.text }}>{text}</Text>



        </TouchableOpacity>
    );
};

export default CustomSmallBotton;

const style = StyleSheet.create({
    botton: {
        width: 110,
        height: 26,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        borderColor: 'blue',
        borderWidth: 1.5
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        color: '#E5E1F6',
    }

})
