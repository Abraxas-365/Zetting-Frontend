import { StyleSheet } from "react-native";
import { COLORS } from '../../../../../../themes/colors/ZettingColors';
import { FONTS } from '../../../../../../themes/fonts/ZettingFonts';

export const styles = StyleSheet.create({
    textInput: {
        color: COLORS.black,
        fontSize: 15,
        fontFamily: FONTS.mainFont,
        marginBottom: 5,
    },
    submitButton: {
        alignSelf: 'center',
        width: '50%',
        marginTop: '11%',
        backgroundColor: COLORS.orange,
    },
    textInputWrapper: {
        borderColor: COLORS.black
    }
})
