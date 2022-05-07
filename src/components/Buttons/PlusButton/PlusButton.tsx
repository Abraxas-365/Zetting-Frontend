import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Plus from '../../../../assets/svg/plus.svg'
import { COLORS } from '../../../themes/colors/ZettingColors';

type Props = {
    state?: boolean
    width?: number
    height?: number
    color?: string
    onPress?: () => void
}

const PlusButton = ({
    width = 38,
    height = 38,
    color = COLORS.white,
    onPress = () => { },
}: Props) => {
    //this must come from the db
    return (
        <TouchableOpacity style={styles.button}
            onPress={() => {
                onPress()
            }}
        >
            <Plus width={width} height={height} stroke={color} />
        </TouchableOpacity>
    );
};

export default PlusButton;

const styles = StyleSheet.create({
    button: {
    }
})
