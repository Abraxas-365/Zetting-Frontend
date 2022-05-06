import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import HeardEmpty from '../../../../assets/svg/heardEmpty.svg'
import HeardFull from '../../../../assets/svg/heardFull.svg'
import { COLORS } from '../../../themes/colors/ZettingColors';

type Props = {
    state?: boolean
    width?: number
    height?: number
    color?: string
    onPress?: () => void
}

const HeardButton = ({
    state = false,
    width = 17.53,
    height = 16.03,
    color = COLORS.white,
    onPress = () => { },
}: Props) => {
    //this must come from the db
    const [press, setPress] = useState(state);

    return (
        <TouchableOpacity style={styles.button}
            onPress={() => {
                setPress(!press);
                onPress()
            }}
        >
            {press ?
                <HeardEmpty width={width} height={height} fill={color} />
                :
                <HeardFull width={17.53} height={16.03} fill={COLORS.white} />
            }

        </TouchableOpacity>
    );
};

export default HeardButton;

const styles = StyleSheet.create({
    button: {
    }
})
