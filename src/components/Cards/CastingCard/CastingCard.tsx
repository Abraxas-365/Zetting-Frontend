import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { style } from './style'

type Props = {
    uri?: string
    title?: string
    info?: string
    date?: string | number
    moth?: string
}

const CastingCard = ({
    uri = "https://dts.lat/blog/wp-content/uploads/2020/07/casilleros-inteligentes.jpg",
    title = "Title",
    info = "info",
    date = 21,
    moth = "JUN"
}: Props) => {

    return (
        <TouchableOpacity activeOpacity={0.9}>
            <ImageBackground
                style={{ width: '100%', borderRadius: 20, height: 232 }}
                imageStyle={{ borderRadius: 20 }}
                source={{ uri }}>
                <LinearGradient
                    colors={['#00000000', '#000000']}
                    style={{ height: '100%', width: '100%', borderRadius: 20 }}
                    start={{ x: 0.3, y: 0 }}
                    end={{ x: 0.3, y: 0.90 }}
                />
                <View style={style.dateBox}>
                    <Text style={style.date}>{date}</Text>
                    <Text style={style.moth}>{moth}</Text>
                </View>
                <Text numberOfLines={1} ellipsizeMode='clip' style={style.title}>{title}</Text>
                <Text numberOfLines={1} ellipsizeMode='clip' style={style.authorText}>{info}</Text>
            </ImageBackground>
        </TouchableOpacity>

    );
};

export default CastingCard;

