import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { StyleSheet } from 'react-native'
interface Props {
    texto: string;
    color?: string;
    colorText?: string;
    ancho?: boolean;
    screen: any;
}

const BottonLoginScreen = ({ texto, color = '#23232B', ancho = false, screen, colorText = '#E5E1F6' }: Props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity


            style={{ ...styleBottonsLoginScreen.boton, backgroundColor: color }}
            onPress={() => navigation.navigate(screen)}>
            <Text style={{ ...styleBottonsLoginScreen.botonText, color: colorText, textAlign: (ancho === true) ? 'left' : 'center' }}>{texto}</Text>
        </TouchableOpacity>
    );
};

interface PropsBottons {
    bottom: string;

}
const BottonsLoginScreen = ({ bottom }: PropsBottons) => {
    return (
        <View style={{
            position: 'absolute',
            bottom: bottom,
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '70%',
        }}>
            <BottonLoginScreen texto="Log In" screen="SignInScreen" />
            <BottonLoginScreen texto="Join Now" color="#E5E1F6" colorText='#23232B' screen="RegisterScreen" />
        </View>
    );
};




const styleBottonsLoginScreen = StyleSheet.create({
    boton: {
        height: '38%',
        backgroundColor: '#2968A2',
        borderRadius: 100,
        justifyContent: 'center',
        borderColor: '#E5E1F6',
        borderWidth: 1,
        marginBottom: '6%'
    },
    botonText: {
        textAlign: 'center',
        padding: '4%',
        fontSize: 15,
        color: '#E5E1F6',
        fontWeight: '300',
    }

})
export default BottonsLoginScreen;
