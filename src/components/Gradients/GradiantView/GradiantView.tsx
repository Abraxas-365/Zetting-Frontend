import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    children: JSX.Element | JSX.Element[]
    style?: {
        borderRadius?: number
    }
}
const GradiantView = ({ children, style }: Props) => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#084F6A', 'black', 'black']}
                style={{ ...StyleSheet.absoluteFillObject, ...style }}
                start={{ x: 0.8, y: 0.8 }}
                end={{ x: 0, y: 0 }}

            />
            {children}
        </View>
    );
};

export default GradiantView;
