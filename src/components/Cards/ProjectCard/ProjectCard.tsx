
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewProps, ViewStyle } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import Bell from '../../../../assets/svg/bell.svg'
import BellFill from '../../../../assets/svg/bellFill.svg'

import { style } from './styles'
import CircularProfilePhotos from '../../ImagesWrappers/CircularProfilePhotos';
import Switch from '../../Switches/CustomSwitch';
import CustomButton from '../../Buttons/CustomButton';
import { serveDefaultImages } from '../../../api/apiCalls';


type Props = {
    title?: string
    textBelowTitle?: string
    textRightPhotos?: string
    AvatarImage1?: string
    AvatarImage2?: string
    AvatarImage3?: string
    buttonText?: string
    switchStatus?: boolean
    swithcColor?: string
    cardStyle?: StyleProp<ViewStyle>
    butonColor?: string
    onPress?: () => void
}

const ProjectCard = ({
    cardStyle,
    title = "Tilte",
    textBelowTitle = "text",
    textRightPhotos,
    AvatarImage1,
    AvatarImage2,
    AvatarImage3,
    buttonText = "text",
    switchStatus = true,
    swithcColor = COLORS.powerOrange,
    butonColor = COLORS.orange,
    onPress = () => { }

}: Props) => {
    //is enable must came from the db
    const [isEnabled, setIsEnabled] = React.useState(switchStatus);
    return (
        <TouchableOpacity style={[style.card, cardStyle]}
            onPress={() => { onPress() }}
            activeOpacity={0.9}>
            <View style={style.contentContainer}>
                <View style={style.contentRight}>
                    <Text numberOfLines={1} ellipsizeMode='clip' style={style.textTitle}>{title}</Text>
                    <Text style={style.textMemberNumber}>{textBelowTitle}</Text>
                    <View style={style.membersAvatares}>
                        <CircularProfilePhotos styleImage={{ marginRight: -15 }} size={38} url={serveDefaultImages + AvatarImage1} />
                        <CircularProfilePhotos styleImage={{ marginRight: -15 }} size={38} url={serveDefaultImages + AvatarImage2} />
                        <CircularProfilePhotos size={38} url={serveDefaultImages + AvatarImage3} />
                        <Text style={{ ...style.textMemberNumber, marginLeft: 5 }}>{textRightPhotos}</Text>
                    </View>
                </View>
                <View style={style.contentLeft}>
                    <View style={{ alignSelf: 'flex-end' }}>
                        <Switch
                            size={30}
                            value={isEnabled}
                            onChange={(value) => setIsEnabled(value)}
                            activeTrackColor={swithcColor}
                            renderInactiveThumbIcon={() => (
                                <Bell width={13} height={13} fill={swithcColor} />)}
                            renderActiveThumbIcon={() => (
                                <BellFill width={13} height={13} fill={swithcColor} />)}
                        />
                    </View>
                    <CustomButton text={buttonText}
                        styleContainer={{ alignSelf: 'flex-end', backgroundColor: butonColor, width: 97, height: 26, borderWidth: 1.5, marginTop: 40 }}
                        styleText={{ fontSize: 15, padding: 4, }}
                    />

                </View>
            </View>

        </TouchableOpacity >
    );
};

export default ProjectCard;

