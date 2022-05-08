import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../themes/colors/ZettingColors";

export const styles = StyleSheet.create({
    checkboxBase: {
        width: 26,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginRight: '1%',
        backgroundColor: 'red',
    },

    checkboxChecked: {
        backgroundColor: 'red',
    },
    section: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '15%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        color: COLORS.black,
        fontSize: 10,
    },

    paragraphOrange: {
        color: '#FF7F39',
        fontSize: 10,
    },
    checkbox: {
        borderRadius: 5,
        margin: 8,
        color: 'red'
    },
});
