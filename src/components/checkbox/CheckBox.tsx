import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const MyCheckbox = () => {

    const [checked, onChange] = useState(false);
    function onCheckmarkPress() {
        onChange(!checked);
    }

    return (
        <Pressable
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={onCheckmarkPress}>
            {checked && <Entypo name="check" size={15} color='#23232B' />}
        </Pressable>
    );
}
const styles = StyleSheet.create({
    checkboxBase: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2,
        marginRight: '5%',
        borderColor: '#23232B',
        backgroundColor: 'transparent',
    },

    checkboxChecked: {
        backgroundColor: '#E5E1F6',
    },
})

export default MyCheckbox
