import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../../components/Buttons/CustomButton';
import { RootStackParamList } from '../../../navigation/stack/SingUpStack';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
import { styleBackground, styleWrappers } from '../../../themes/styles';

const ScreenWellcome = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <View style={[styleBackground.darkBackground]}>
            <View style={styleWrappers.frameWrapper}>
                <Text numberOfLines={3} style={styles.text}>
                    OUR{'\n'}
                    PASSION
                    CONNECT US
                </Text>
                <CustomButton
                    styleContainer={{ marginTop: '20%' }}
                    text='Login'
                    onPress={() => navigation.navigate('LoginScreen')}
                />
                <CustomButton
                    styleContainer={{ marginTop: '5%', backgroundColor: COLORS.white }}
                    styleText={{ color: COLORS.black }}
                    text='Register'
                    onPress={() => navigation.navigate('CheckEmailScreen')}
                />
            </View>

        </View>
    );
};

export default ScreenWellcome;

export const styles = StyleSheet.create({
    text: {
        marginTop: '105%',
        fontSize: 49,
        fontFamily: FONTS.secondaryFontBold,
        fontWeight: '800',
        color: COLORS.white
    }
})
