
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
export const style = StyleSheet.create({
    card: {
        width: 152,
        borderRadius: 20,
        height: 92
    },
    text: {
        margin: 10,
        fontFamily: FONTS.secondaryFontBold,
        fontSize: 13,
        fontWeight: 'bold',
        color: COLORS.white
    }

})
