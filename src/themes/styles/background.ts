import { StyleSheet } from "react-native";
import { COLORS } from "../colors/ZettingColors";

export const styleBackground = StyleSheet.create({
    darkBackground: {
        backgroundColor: COLORS.black,
        flex: 1
    },
    lightBackground: {
        backgroundColor: COLORS.white,
        flex: 1
    }
})

export default styleBackground;
