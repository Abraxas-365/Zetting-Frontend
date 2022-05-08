import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../themes/colors/ZettingColors";
import { FONTS } from "../../../../../themes/fonts/ZettingFonts";

export const styles = StyleSheet.create({
    textInput: {
        color: COLORS.white,
        fontSize: 20,
        fontFamily: FONTS.mainFont,
        marginBottom: 5,
    },
    submitButton: {
        alignSelf: 'center',
        width: '60%',
        marginTop: '13%',
        backgroundColor: COLORS.orange,
        borderColor: COLORS.orange,
    },
    submitButtonText: {
        fontSize: 20,
        fontFamily: FONTS.mainFont,
        paddingHorizontal: 10
    },
    textInputWrapper: {
        borderColor: COLORS.white
    },
    lengthInput: {
        color: COLORS.white,
        fontSize: 12,
    },
    wrapper: {
    }
})
