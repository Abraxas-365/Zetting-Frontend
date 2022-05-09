import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
    TextInput, Image
} from 'react-native';
import Search from '../../../../assets/svg/search.svg'
import { COLORS } from '../../../themes/colors/ZettingColors';

type Props = {
    value: any
    updateSearch: any,
    style: any
}
const CustomSearchBar = ({ value, updateSearch, style }: Props) => {

    return (
        <View style={[styles.container, style]}>
            <View style={styles.searchContainer}>
                <View style={styles.vwSearch}>
                    <Search width={18} height={18} fill={COLORS.white} />

                </View>

                <TextInput
                    value={value}
                    placeholder="Search"
                    placeholderTextColor={COLORS.white}
                    style={styles.textInput}
                    onChangeText={(text) => {
                        updateSearch(text)
                    }}
                />
            </View>
        </View >
    )
}

export default CustomSearchBar
const styles = StyleSheet.create({
    txtError: {
        marginTop: '2%',
        width: '89%',
        color: 'white',

    },
    vwClear: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        // backgroundColor: 'green',
        flex: 1,
        color: COLORS.white
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 40,
        // backgroundColor: 'red'
    },
    icSearch: {
        height: 18, width: 18
    },
    searchContainer:
    {

        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.white,
        backgroundColor: COLORS.black,
        height: 32,
        flexDirection: 'row'

    },
    container: {
        height: 80,
        alignItems: 'center',
        // height: '100%', width: '100%'
    },
});
