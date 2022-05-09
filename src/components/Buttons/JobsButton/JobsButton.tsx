import React from 'react';
import { ImageBackground, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { style } from './style'

type Props = {
    styles?: StyleProp<ViewStyle>
    text?: string
    uri?: string
    onPress?: () => void
}

const JobsButton = ({
    styles,
    text = "profession",
    uri,
    onPress = () => { }

}: Props) => {
    return (
        <TouchableOpacity
            onPress={() => { onPress(); }}
        >
            <ImageBackground
                style={[style.card, styles]}
                imageStyle={{ borderRadius: 11 }}
                source={{ uri }}>
                <Text style={style.text}>{text}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default JobsButton;

