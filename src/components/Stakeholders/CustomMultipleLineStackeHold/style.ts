
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
export const styles = StyleSheet.create({
    wraper: {
        flexDirection: 'row',
        height: 113,
        borderRadius: 9,
        marginTop: 10,
        borderWidth: 1,
        borderColor: COLORS.white,
    },
    title: {
        fontSize: 15,
        fontFamily: FONTS.mainFont,
        color: COLORS.white,
    },
    textInput: {
        flex: 1,
        fontSize: 20,
        fontFamily: FONTS.mainFont,
        color: COLORS.white,
    },


})
