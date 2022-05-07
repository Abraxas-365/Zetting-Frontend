import * as Font from 'expo-font';

const useFonts = async () =>
    await Font.loadAsync({
        proximaNova: require('../../../../assets/fonts/ProximaNova.otf'),
        proximaNovaBold: require('../../../../assets/fonts/ProximaNovaBold.otf'),
        addelleSansBold: require('../../../../assets/fonts/AdelleSansEXT-Bold.ttf'),
        addelleSans: require('../../../../assets/fonts/AdelleSansEXT-Regular.ttf'),
    });
export default useFonts
