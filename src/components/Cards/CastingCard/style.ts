import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors/ZettingColors";
import { FONTS } from "../../../themes/fonts/ZettingFonts";

export const style = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontSize: 25,
        fontFamily: FONTS.secondaryFontBold,
        marginLeft: 25,
        bottom: 90,
        fontWeight: 'bold'
    },
    authorText: {
        color: COLORS.white,
        fontSize: 15,
        fontFamily: FONTS.mainFont,
        marginLeft: 25,
        bottom: 80,
    },
    dateBox: {
        backgroundColor: COLORS.white,
        width: 51,
        borderRadius: 8,
        height: 53,
        position: 'absolute',
        right: 18,
        alignItems: 'center',
        top: 18
    },
    date: {
        marginTop: 5,
        fontSize: 20,
    },
    moth: {
        fontSize: 15,
    }

})
