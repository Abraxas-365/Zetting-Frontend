
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



type BottonProps = {
    onPress?: any
    top?: string
    color?: string
    text?: string
    width?: string
}
const CustomCenterBotton = ({ onPress = () => { }, color = '#FF7F39', top = '13%', text = "texto", width = '50%' }: BottonProps) => {
    return (
        <TouchableOpacity
            style={{ ...style.boton, backgroundColor: color, marginTop: top, width: width }}
            onPress={onPress}>
            <Text style={style.botonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    boton: {
        alignSelf: 'center',
        backgroundColor: '#FF7F39',
        borderRadius: 40,
        justifyContent: 'center',
        marginTop: '13%',
    },
    botonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 16,
        color: '#E5E1F6',
        fontWeight: 'bold',
    }

})
export default CustomCenterBotton;
