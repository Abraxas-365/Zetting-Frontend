import React, { useState } from 'react';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { COLORS } from '../../../../../themes/colors/ZettingColors';
import { Entypo } from '@expo/vector-icons';
import { styles } from './style'
type BottonProps = {
    colorPick?: string
    onChake?: any,
    checked?: any
    cambairUno?: any
    cambiarDos?: any
    cambiarTres?: any
    cambiarCuatro?: any
}

const ColorPicker = ({ colorPick, onChake, checked, cambairUno, cambiarDos, cambiarTres, cambiarCuatro }: BottonProps) => {

    const [color, setColor] = useState(colorPick);
    function onCheckmarkPress() {
        onChake(!checked);
        cambairUno(false)
        cambiarDos(false)
        cambiarTres(false)
        cambiarCuatro(false)
        setColor(color)
    }

    return (
        <Pressable
            style={[styles.checkboxBase, checked && styles.checkboxChecked, { backgroundColor: color }]}
            onPress={onCheckmarkPress}>
            {checked && <Entypo name="check" size={15} color={COLORS.black} />}
        </Pressable>
    );
}

type Props = {
    text: string
    style?: StyleProp<ViewStyle>
    color1: boolean
    color2: boolean
    color3: boolean
    color4: boolean
    color5: boolean
    onColor1: React.Dispatch<React.SetStateAction<boolean>>
    onColor2: React.Dispatch<React.SetStateAction<boolean>>
    onColor3: React.Dispatch<React.SetStateAction<boolean>>
    onColor4: React.Dispatch<React.SetStateAction<boolean>>
    onColor5: React.Dispatch<React.SetStateAction<boolean>>
}
const ColorPickerContainer = ({
    style,
    text,
    color1,
    color2,
    color3,
    color4,
    color5,
    onColor1,
    onColor2,
    onColor3,
    onColor4,
    onColor5
}: Props) => {

    return (
        <View style={[{
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            height: '15%',
        }, style]}>
            <Text style={{ color: COLORS.white }}>{text}</Text>
            <View style={{ flexDirection: 'row', width: '100%', height: '40%', position: 'absolute', bottom: 5 }}>
                <ColorPicker colorPick='#FF7F39' cambairUno={onColor2} cambiarDos={onColor3} cambiarTres={onColor4} cambiarCuatro={onColor5} checked={color1} onChake={onColor1} />
                <ColorPicker colorPick='#F8E5A3' cambairUno={onColor1} cambiarDos={onColor3} cambiarTres={onColor4} cambiarCuatro={onColor5} checked={color2} onChake={onColor2} />
                <ColorPicker colorPick='#BBC79E' cambairUno={onColor1} cambiarDos={onColor2} cambiarTres={onColor4} cambiarCuatro={onColor5} checked={color3} onChake={onColor3} />
                <ColorPicker colorPick='#8CBBDD' cambairUno={onColor1} cambiarDos={onColor2} cambiarTres={onColor3} cambiarCuatro={onColor5} checked={color4} onChake={onColor4} />
                <ColorPicker colorPick='#BD7ABC' cambairUno={onColor1} cambiarDos={onColor2} cambiarTres={onColor3} cambiarCuatro={onColor4} checked={color5} onChake={onColor5} />
            </View>
        </View>
    )
}

export default ColorPickerContainer;

