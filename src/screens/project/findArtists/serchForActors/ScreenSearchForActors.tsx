import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { styleBackground, stylesText, styleWrappers } from '../../../../themes/styles';
import { SearchBar } from 'react-native-elements';
import { COLORS } from '../../../../themes/colors/ZettingColors';
import CustomSearchBar from '../../../../components/SearchBar/CustomSearchBar/CustomSearBar';
import { FONTS } from '../../../../themes/fonts/ZettingFonts';
import CustomButton from '../../../../components/Buttons/CustomButton';
import Filter from '../../../../../assets/svg/filter.svg'
import ActorsList from '../../../../functionalities/artists/actors/container/cads/ActorsList';
import I18n from 'i18n-js';
import { useState } from 'react';

const ScreenSearchForActors = () => {
    const [value, setValue] = useState()
    const updateSearch = (value: any) => {
        //do your search logic or anything
    }
    return (
        <SafeAreaView style={styleBackground.darkBackground}>
            <View style={styleWrappers.frameWrapper}>
                <Text style={[stylesText.titleLight, { alignSelf: 'center' }]}>{I18n.t("Actor.ACTORS")}</Text>
                <Text style={[style.slogan, { alignSelf: 'center' }]}>{I18n.t("Actor.Slogan")}</Text>


                <CustomSearchBar
                    value={value}
                    updateSearch={updateSearch}
                    style={{ marginTop: '8%' }}
                />
                <CustomButton
                    styleContainer={{
                        backgroundColor: COLORS.orange,
                        borderColor: COLORS.black,
                        width: '35%',
                        marginTop: '-10%'
                    }}
                    styleText={{ marginLeft: '20%', marginTop: '1%' }}
                    childrenStyle={{ margin: '10%' }}
                    text='Filters' >
                    <Filter width={23} height={17.5} fill={COLORS.white} />

                </CustomButton>


                <ActorsList listStyle={{ height: '100%', marginTop: '7%' }} />

            </View>



        </SafeAreaView>
    );
};

export default ScreenSearchForActors;


export const style = StyleSheet.create({
    slogan: {
        marginTop: '5%',
        color: COLORS.white,
        fontSize: 20,
        fontFamily: FONTS.mainFont

    }
})
