import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TalentsButtonCard from '../../components/buttons/TalentsButtonCard';
import { useTalents } from '../../hooks/useTalents';
import { RootStackParamList } from '../../navigator/StackNavigator';
import { styleBackgrounds } from '../../themes/Backgrounds';
import { styleTitles } from '../../themes/Titles';
import { styleWrappers } from '../../themes/Wrappers';

interface Props extends StackScreenProps<RootStackParamList, 'ActorsScreen'> { }
const ActorsScreen = ({ route }: Props) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const { talents } = useTalents("actor");

    return (
        <SafeAreaView style={styleBackgrounds.fondoDark}>
            <View style={styleWrappers.wrapperTitles}>
                <View style={{ ...styleTitles.titleTextLight, alignSelf: 'center' }}>
                    <Text style={styleTitles.titleTextLight}>ACTORS</Text>
                </View>
                <View>
                    <Text style={{ ...styleTitles.subTitle, marginTop: '3%', alignSelf: 'center' }} >The sound of Music</Text>
                </View>
                <View style={{ marginBottom: "3%", marginTop: "3%" }}>
                    <TouchableOpacity style={styles.filter} onPress={() => navigation.navigate('FilterActorScreen')}>
                        <Text style={styles.filterText}>Filters</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList contentContainerStyle={{ ...styleWrappers.wrapperHorizontalGap }} data={talents} renderItem={({ item }: any) => <TalentsButtonCard user={item} color={item.color} pid={route.params.pid} />} />
        </SafeAreaView>
    );
};

export default ActorsScreen;

const styles = StyleSheet.create({
    filter: {
        marginHorizontal: '8%',
        backgroundColor: '#FF7F39',
        borderRadius: 20,
        width: 112,
        height: 32,

    },

    filterText: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        padding: '3%'
    },

})
