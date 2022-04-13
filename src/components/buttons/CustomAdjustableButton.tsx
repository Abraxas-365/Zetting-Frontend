
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type BottonProps = {
    onPress?: any
    top?: string
    borderColor?: string
    marginLeft?: string
    marginRight?: string
    width?: number
    height?: number
    color?: string
    text?: string
    borderWidth?: number
}
const CustomAdjustableBotton = ({ onPress = () => { }, top, borderColor, color, text = 'texto', marginLeft = '0%', marginRight = '0%', borderWidth = 1.5 }: BottonProps) => {
    return (
        <TouchableOpacity style={{ ...style.botton, marginTop: top, backgroundColor: color, borderColor, marginLeft, marginRight, borderWidth }}
            onPress={onPress}>
            <Text style={{ ...style.text }}>{text}</Text>



        </TouchableOpacity>
    );
};

export default CustomAdjustableBotton;

const style = StyleSheet.create({
    botton: {
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        paddingVertical: 3,
        paddingHorizontal: 20,
        color: '#E5E1F6',
    }

})
