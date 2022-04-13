import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {
    texto?: string;
    stakeHold?: any;
    stakeHoldText?: any;
    valueText?: any;
    height?: any;
    top?: any;
    keyboardType?: any;
    secureTextEntry?: boolean;
    maxLength?: number;
    color?: any;
}
const StakeHolders = ({ height = 60, top = '10%', texto, valueText, stakeHold, stakeHoldText, keyboardType = 'default', secureTextEntry = false, maxLength = 100, color = '#E5E1F6' }: Props) => {
    return (
        // 23232B
        <View style={{
            borderBottomColor: color,
            borderBottomWidth: 1,
            marginTop: top,
            height: height,

        }}>
            <Text style={{ color: color }}>{texto}</Text>

            <TextInput
                keyboardAppearance='dark'
                style={{ ...styleStakeHold.input, color: color }}
                onChangeText={(value) => stakeHold(value, valueText)}
                value={stakeHoldText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                maxLength={maxLength}
            />
        </View>
    );
};

export default StakeHolders;

export const styleStakeHold = StyleSheet.create({
    input: {
        color: '#E5E1F6',
        paddingTop: '4.5%',
        fontSize: 16,


    },

})
