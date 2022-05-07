import React from 'react';
import { StyleProp, Text, TextInput, TextInputProps, TextProps, TextStyle, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { styles } from './style'


type Props = {
    title?: string
    titleStyle?: StyleProp<TextStyle>
    textInputProps?: StyleProp<TextInputProps>
    textInputStyle?: StyleProp<TextStyle>
    boxWrapper?: StyleProp<ViewStyle>
    iconWrapper?: StyleProp<ViewStyle>
    children?: React.FC<SvgProps>[] | React.FC<SvgProps> | JSX.Element | JSX.Element[]
}

const CustomStakeHold = ({
    title = 'title',
    titleStyle,
    textInputProps,
    textInputStyle,
    boxWrapper,
    iconWrapper,
    children,

}: Props) => {
    return (

        <View >
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <View style={[styles.wraper, boxWrapper]}>

                <TextInput
                    {...textInputProps}
                    style={[styles.textInput, textInputStyle]} />
                <View style={iconWrapper}>
                    {children}
                </View>
            </View>
        </View>
    );
};

export default CustomStakeHold;

