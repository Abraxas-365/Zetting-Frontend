import React, { Children } from 'react';
import { StyleProp, Text, TextProps, TouchableOpacity, View, ViewStyle } from 'react-native';
import { style } from './style'
import { SvgProps } from 'react-native-svg';

type Props = {
    styleContainer?: StyleProp<ViewStyle>
    styleText?: StyleProp<TextProps>
    children?: React.FC<SvgProps>[] | React.FC<SvgProps> | JSX.Element | JSX.Element[]
    childrenStyle?: StyleProp<ViewStyle>
    text: string
    activeOpacity?: number
}

const CustomButton = ({ text, styleContainer, styleText, activeOpacity = 0.5, children, childrenStyle }: Props) => {
    return (
        <TouchableOpacity style={[style.button, styleContainer]} activeOpacity={activeOpacity} >
            <View style={[{ position: 'absolute', width: 30 }, childrenStyle]}>
                {children}
            </View>
            <Text style={[
                style.text,
                styleText
            ]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
