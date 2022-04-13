import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type BottonProps = {
    text?: string
    marginTop?: string | number;
    fuction?: any;
    img?: any;
}
const BottonPlatform = ({ fuction = () => { }, text, img }: BottonProps) => {

    return (
        < TouchableOpacity

            onPress={fuction}>

            <View style={style.boton}>

                <Image style={style.image} source={img} />
                <Text style={style.botonText}>{text}</Text>
            </View>
        </TouchableOpacity >
    );
};
const BottonsPlatforms = ({ fuction, text, marginTop }: BottonProps) => {
    let google = require('../../../assets/png/google.png')
    let facebook = require('../../../assets/png/facebook.png')
    let apple = require('../../../assets/png/apple.png')
    return (
        <View style={{
            flexDirection: 'column', width: '100%', alignSelf: 'center',
            marginTop: marginTop,
        }}>

            <BottonPlatform text="Continue with Facebook" img={facebook} />
            <BottonPlatform text="Continue with Google" img={google} />
            <BottonPlatform text="Continue with Apple" img={apple} />
        </View>

    )

}

const style = StyleSheet.create({
    boton: {
        height: 40,
        backgroundColor: '#E2E0F3',
        borderRadius: 10,
        borderColor: '#23232B',
        borderWidth: 1,
        marginVertical: "4%",
        flexDirection: 'row',
        alignItems: 'center',

    },
    botonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 15,
        left: '210%',
        color: '#23232B',
        fontWeight: '300',
    },

    image: {
        left: '4%',
        position: 'absolute',
        height: '80%',
        width: '10%',
        borderRadius: 100,

    }

})

export default BottonsPlatforms;
