
import React, { useState } from 'react';
import { StyleProp, Text, TextInput, TextInputProps, TextProps, TextStyle, View, ViewStyle } from 'react-native';
import { useForm } from '../../../functionalities/share/hooks/useForm';
import { styles } from './style'


type Props = {
    title?: string
    titleStyle?: StyleProp<TextStyle>
    textInputProps?: StyleProp<TextInputProps>
    boxWrapper?: StyleProp<ViewStyle>
    componentWrapper?: StyleProp<ViewStyle>
    children?: JSX.Element | JSX.Element[]
}

const CustomMultipleLineStackeHold = ({
    title = 'title',
    titleStyle,
    textInputProps = {
        multiline: true,
    },
    componentWrapper,
    children,
    boxWrapper,

}: Props) => {

    return (
        <View style={componentWrapper}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <View style={[styles.wraper, boxWrapper]}>
                <TextInput
                    {...textInputProps}
                    multiline={true}
                    style={{ ...styles.textInput }}
                />
                <View style={[{ width: 50, alignSelf: 'flex-end', margin: 10 }]}>
                    {children}
                </View>
            </View>
        </View>
    );
};

export default CustomMultipleLineStackeHold;
