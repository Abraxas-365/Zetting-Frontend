
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import HeardButton from '../../Buttons/HeardButton';
import { style } from './styles'


type Props = {
    onPress?: () => void
    onPressHeard?: () => void
    headState?: boolean
    name?: string
    info?: string
    money?: number | string

}

const WorkerCard = ({
    onPress = () => { },
    onPressHeard = () => { },
    headState = false,
    name = "Name",
    info = "info",
    money = 120,
}: Props) => {
    return (
        <TouchableOpacity style={style.card}
            onPress={() => { onPress(); }}
            activeOpacity={0.9} >
            <Image
                style={style.image}
                source={{ uri: "https://www.larepublica.ec/wp-content/uploads/2020/04/Dwayne-Johnson-678x381.jpg" }}
            />
            <View style={style.infoWraper}>
                <Text numberOfLines={1} ellipsizeMode='clip' style={style.nameText}>{name}</Text>
                <Text numberOfLines={2} ellipsizeMode='tail' style={style.infoText}>{info}</Text>
                <View style={style.footer}>
                    {   /*TODO use i18n for money*/}
                    <Text style={style.moneyText}>S/</Text>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={style.moneyText}>{money}</Text>
                    <Text style={style.moneyTime}>xH</Text>
                    <View style={style.footerRight}>
                        <HeardButton width={17.53} height={16.03} color={COLORS.white} onPress={onPressHeard} state={headState} />
                    </View>
                </View>
            </View>



        </TouchableOpacity >
    );
};

export default WorkerCard;
