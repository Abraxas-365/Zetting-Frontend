import React from 'react';
import { StyleProp, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { styles } from './style'


type Props = {
    title?: string
    titleStyle?: StyleProp<TextStyle>
    textInput?: StyleProp<TextStyle>
    boxWrapper?: StyleProp<ViewStyle>
    iconWrapper?: StyleProp<ViewStyle>
    children?: React.FC<SvgProps>[] | React.FC<SvgProps> | JSX.Element | JSX.Element[]
}

const CustomStakeHold = ({
    title = 'title',
    titleStyle,
    textInput,
    boxWrapper,
    iconWrapper,
    children,

}: Props) => {
    return (

        <View >
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <View style={[styles.wraper, boxWrapper]}>

                <TextInput style={[styles.textInput, textInput]} />
                <View style={iconWrapper}>
                    {children}
                </View>
            </View>
        </View>
    );
};

export default CustomStakeHold;

