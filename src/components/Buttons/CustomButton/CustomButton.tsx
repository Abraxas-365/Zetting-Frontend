import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { style } from './style'

type Props = {
    styleContainer?: {
        marginTop?: number;
        backgroundColor?: string
        borderColor?: string
        borderWidth?: number
        width?: number | string
        height?: number | string
        bottom?: number | string
        position?: any | string
        alignSelf?: any | string
    }
    styleText?: {
        color?: string
        fontSize?: number
        padding?: number
        margin?: number
        marginHorizontal?: number
    }
    text: string
    activeOpacity?: number
}

const CustomButton = ({ text, styleContainer, styleText, activeOpacity = 0.5 }: Props) => {
    return (
        <TouchableOpacity style={[style.button, styleContainer]} activeOpacity={activeOpacity} >
            <Text style={[
                style.text,
                styleText
            ]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
