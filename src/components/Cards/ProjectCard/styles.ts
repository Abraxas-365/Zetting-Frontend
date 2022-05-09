import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors/ZettingColors";

export const style = StyleSheet.create({
    card: {
        backgroundColor: COLORS.orange,
        borderRadius: 11,
        height: 138,

    },
    contentContainer: {
        flexDirection: 'row',
        margin: 20,
    },
    contentRight: {
        left: 0,
        width: '50%',
        flexDirection: 'column'
    },
    contentLeft: {
        width: '50%',
        right: 0,
        flexDirection: 'column'
    },
    membersAvatares: {
        marginTop: 13,
        flexDirection: 'row'
    },
    textTitle: {
        fontSize: 20,
        color: COLORS.white,
        fontWeight: '800'
    },
    textMemberNumber: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'normal',
        color: COLORS.white
    }
})

