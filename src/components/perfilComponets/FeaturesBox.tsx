import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


type Props = {
    marginTop?: number;
    age?: number | string;
    tamano?: number | string
    gender?: string

}


const FeaturesBox = ({ marginTop = 35, age, tamano, gender }: Props) => {
    return (
        <View style={{ flexDirection: 'row', marginTop }}>
            <View style={{}}>
                <Text style={styles.text}>Age</Text>
                <Text style={styles.numbers}>{age}</Text>
            </View>
            <View style={styles.separator} />
            <View style={{}}>
                <Text style={styles.text}>Height</Text>
                <Text style={styles.numbers}>{tamano}</Text>
            </View>
            <View style={styles.separator} />

            <View style={{ flexDirection: 'row', }}>
                <Text style={{ ...styles.numbers, bottom: 10 }}>{gender}</Text>
            </View>
        </View>
    );
};

export default FeaturesBox;

const styles = StyleSheet.create({

    text: {
        color: '#e5e1f6',
        alignSelf: 'center',
        fontSize: 20
    },
    separator: { borderRightColor: '#e5e1f6', borderWidth: 1, height: 20, marginHorizontal: 20, marginTop: 15 },

    numbers: {
        fontSize: 15,
        marginTop: 10,
        color: '#e5e1f6',
        alignSelf: 'center',
    }

})
