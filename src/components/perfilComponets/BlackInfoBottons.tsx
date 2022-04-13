
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type Props = {
    width?: number | string
    marginRight?: number | string
    numbers?: number | string
    text?: string | string

}
const BlackInfoBottons = ({ width, marginRight = 0, numbers, text }: Props) => {
    return (
        <View style={{ ...style.box, width, marginRight }}>
            <Text style={{ fontSize: 20, fontWeight: '500', color: '#e5e1f6', marginLeft: 15, marginTop: 10 }}>{numbers}</Text>

            <Text style={{ fontSize: 15, color: '#e5e1f6', position: 'absolute', bottom: 10, marginLeft: 15 }}>{text}</Text>
        </View >
    );
};

export default BlackInfoBottons;

const style = StyleSheet.create({
    box: {
        backgroundColor: '#040406',
        height: 73,
        width: '30%',
        borderRadius: 9

    }


})
