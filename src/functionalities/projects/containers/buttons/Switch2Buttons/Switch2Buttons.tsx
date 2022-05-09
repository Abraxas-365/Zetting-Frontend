import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../../../../../components/Buttons/CustomButton';
import { COLORS } from '../../../../../themes/colors/ZettingColors';

type Props = {

    onFistButton?: () => void;
    onSecondButton?: () => void;

}

const Switch2Buttons = ({
    onFistButton = () => { },
    onSecondButton = () => { },
}: Props) => {
    const [stateButton1, setStateButton1] = useState(true);
    const [stateButton2, setStateButton2] = useState(false);
    return (

        <View style={{ flexDirection: 'row', marginTop: '7%' }}>

            <CustomButton text="My Project"
                styleContainer={[
                    styles.button,
                    stateButton1 ? styles.isPress : {}]}
                styleText={{ fontSize: 15, padding: 4 }}
                onPress={() => {
                    setStateButton1(true)
                    setStateButton2(false)
                    onFistButton()
                }}
            />

            <CustomButton text="Project"
                styleContainer={[
                    styles.button, { marginLeft: '5%' },
                    stateButton2 ? styles.isPress : {}]}
                styleText={{ fontSize: 15, padding: 4 }}
                onPress={() => {
                    setStateButton1(false)
                    setStateButton2(true)
                    onSecondButton()
                }}
            />
        </View>

    );
};

export default Switch2Buttons;

export const styles = StyleSheet.create({
    isPress: {
        backgroundColor: COLORS.orange,
        borderColor: COLORS.orange
    },
    button: {
        width: 110,
        height: 26,
        alignItems: 'center',
    }
})
