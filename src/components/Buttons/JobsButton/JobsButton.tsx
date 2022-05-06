import React from 'react';
import { ImageBackground, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { style } from './style'

type Props = {
    styles?: StyleProp<ViewStyle>
    text?: string
    uri?: string
}

const JobsButton = ({
    styles,
    text = "profession",
    uri

}: Props) => {
    return (
        <TouchableOpacity>
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

