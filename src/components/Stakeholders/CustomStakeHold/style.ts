import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
export const styles = StyleSheet.create({
    wraper: {
        marginTop: 10,
        borderBottomWidth: 1,
        flexDirection: 'row',
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
    }

})
