import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { style } from './style'

type Props = {
    url?: string;
    size?: number;
    styleImage?: {
        marginTop?: number;
        marginHorizontal?: number;
        marginRight?: number;
        maginLeft?: number;
    }
}

const CircularProfilePhotos = ({ url, size, styleImage }: Props) => {
    return (
        <Image
            style={{ ...style.image, width: size, height: size, ...styleImage }}
            source={{ uri: url }}
        />
    );
};

export default CircularProfilePhotos;

