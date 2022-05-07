import { StyleSheet } from "react-native";
import { COLORS } from "../colors/ZettingColors";
import { FONTS } from "../fonts/ZettingFonts";

export const stylesText = StyleSheet.create({
    titleDark: {
        color: COLORS.black,
        fontFamily: FONTS.secondaryFontBold,
        fontSize: 25,
    },
    titleLight: {
        color: COLORS.white,
        fontFamily: FONTS.secondaryFontBold,
        fontSize: 25,
    }

})
