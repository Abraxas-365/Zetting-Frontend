import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { styles } from './style'

type Props = {

    text?: string
    containerStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    children?: React.FC<SvgProps>[] | React.FC<SvgProps> | JSX.Element | JSX.Element[]
    onPress?: () => void

}

const SocialMediaButton = ({
    text = 'Text',
    containerStyle,
    textStyle,
    children,
    onPress = () => { }

}: Props) => {
    return (
        <TouchableOpacity
            style={[styles.wraper, containerStyle]}
            onPress={() => onPress()}
        >
            <View style={{ alignSelf: 'center', marginLeft: '5%' }}>
                {children}
            </View>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default SocialMediaButton;

