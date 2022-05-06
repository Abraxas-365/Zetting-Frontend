import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors/ZettingColors";
import { FONTS } from "../../../themes/fonts/ZettingFonts";

export const style = StyleSheet.create({
    card: {
        borderRadius: 11,
        height: 130,
        backgroundColor: COLORS.orange,
        flexDirection: 'row'
    },
    image: {
        borderBottomLeftRadius: 9,
        borderTopLeftRadius: 9,
        width: 130,
        height: '100%'
    },
    footerRight: {
        position: 'absolute',
        top: 10,
        right: 0,
    },
    infoWraper: {
        marginVertical: 20,
        marginHorizontal: 11,
        width: '48%',
    },
    footer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    nameText: {
        color: COLORS.white,
        fontSize: 20,
        fontFamily: FONTS.mainFontBold,
        fontWeight: '600'
    },
    infoText: {
        marginTop: 10,
        color: COLORS.white,
        fontSize: 12,
        fontFamily: FONTS.mainFont,
    },
    moneyText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: FONTS.mainFont,
    },
    moneyTime: {
        color: COLORS.white,
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 12,
        fontFamily: FONTS.mainFont,
    }

})
