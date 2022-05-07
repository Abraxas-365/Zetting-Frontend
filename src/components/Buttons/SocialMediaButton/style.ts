import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
export const styles = StyleSheet.create({
    wraper: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 9,

    },
    text: {
        alignSelf: 'center',
        marginLeft: '10%',
        fontFamily: FONTS.mainFont,
        fontSize: 20,
        color: COLORS.black,
        padding: 10,

    }

})
