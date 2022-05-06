import ImageColors from 'react-native-image-colors'
export const getImageColors = async (uri: string) => {

    const colors = await ImageColors.getColors(uri, {});
    let primary;
    let secondary;

    if (colors.platform === "android") {
        //Acces android properties
        primary = colors.average
        secondary = colors.darkMuted
    }
    if (colors.platform === "ios") {
        primary = colors.primary
        secondary = colors.secondary
    }
    return [primary, secondary]
}
