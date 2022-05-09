import { StyleSheet } from "react-native";

import { COLORS } from '../../../../themes/colors/ZettingColors';
import { FONTS } from '../../../../themes/fonts/ZettingFonts';
export const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    },
    skipButton: {
        backgroundColor: COLORS.white,
        width: 80,
        height: 30,
        alignSelf: 'flex-end',
        marginTop: 15


    },
    skipButtonText: {
        color: COLORS.orange,
        fontSize: 15,
        padding: 5,
        fontFamily: FONTS.mainFont
    },
    sloganText: {
        flex: 1,
        marginTop: 10,
        alignSelf: 'center',
        fontFamily: FONTS.mainFont,
        color: COLORS.white,
        fontSize: 20

    }
})
