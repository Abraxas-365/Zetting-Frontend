import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import SocialMediaButton from '../../../../../components/Buttons/SocialMediaButton';
import Facebook from '../../../../../../assets/svg/facebook.svg';
import Google from '../../../../../../assets/svg/google.svg';
import Apple from '../../../../../../assets/svg/apple.svg';
//TODO make actions

type Props = {
    styleContainer?: StyleProp<ViewStyle>
}
const SocialMediaButtonsContainer = ({
    styleContainer
}: Props) => {
    return (
        <View style={styleContainer}>
            <SocialMediaButton text='Continue with Facebook'
                onPress={() => { }}
            >
                <Facebook />
            </SocialMediaButton>

            <SocialMediaButton containerStyle={{ marginTop: 25 }} text='Continue with Google'
                onPress={() => { }}
            >
                <Google />
            </SocialMediaButton>

            <SocialMediaButton containerStyle={{ marginTop: 25 }} text='Continue with Apple'
                onPress={() => { }}
            >
                <Apple />
            </SocialMediaButton>
        </View >
    );
};

export default SocialMediaButtonsContainer;
