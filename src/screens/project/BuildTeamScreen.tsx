

import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { serveDefaultImages } from '../../api/apiCalls';
import { RootStackParamList } from '../../navigator/StackNavigator';
import { styleBackgrounds } from '../../themes/Backgrounds';
import { styleTitles } from '../../themes/Titles';

const OmitBottom = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <TouchableOpacity
            style={styles.boton}
            onPress={() => {

                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'BottomTabs' }
                        ]

                    }))

            }}>
            <Text style={styles.botonText}>Omitir</Text>
        </TouchableOpacity>


    )
}

type BottonProps = {
    onPress?: any
    text?: string
    image?: string
}
const CategoriesBotton = ({ onPress = () => { }, text = 'test', image = serveDefaultImages + "/laRoca.jpeg" }: BottonProps) => {
    return (
        <TouchableOpacity
            style={{ width: 152, height: 92, borderRadius: 9 }}
            onPress={onPress}>
            <Image style={{ flex: 1, borderRadius: 9 }} resizeMode='cover' source={{ uri: image }} />
            <Text style={{ position: 'absolute', fontSize: 13, color: '#E5E1F6', fontWeight: '800', left: 10, top: 6 }}>{text}</Text>
        </TouchableOpacity>
    )

}

interface Props extends StackScreenProps<RootStackParamList, 'BuildTeamScreen'> { }
const BuildTeamScreen = ({ route }: Props) => {
    const pid = route.params.data.pid
    console.log('el pid: ' + pid)

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <View style={styleBackgrounds.fondoOrange}>
            <View style={styles.topContainer}>
                <Text style={styleTitles.titleTextLight}>BUILD YOUR TEAM</Text>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <Text style={styles.slogan}>The Sound of Music</Text>
                    <OmitBottom />
                </View>
            </View>
            <View style={{ ...styleBackgrounds.fondoDark, top: '13%' }}>
                <ScrollView style={{ ...styleBackgrounds.fondoDark, marginHorizontal: '8%' }}>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 20, position: 'relative' }}>
                            <View style={{ position: 'relative', left: 0, }}>
                                <CategoriesBotton text='ACTORS' onPress={() => { navigation.navigate('ActorsScreen', { pid }) }} image={serveDefaultImages + "/actorButtons.jpeg"} />
                            </View>
                            <View style={{ position: 'absolute', right: 0 }}>
                                <CategoriesBotton image={serveDefaultImages + "/productorButtons.jpeg"} text="PRODUCTOR" />
                            </View>
                        </View>

                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 20, position: 'relative' }}>
                            <View style={{ position: 'relative', left: 0, }}>
                                <CategoriesBotton image={serveDefaultImages + "directorArteButtons.jpg"} text="ART DIRECTOR" />
                            </View>
                            <View style={{ position: 'absolute', right: 0 }}>
                                <CategoriesBotton image={serveDefaultImages + "lightDirectorButtons.jpeg"} text="LIGHT DIRECTION" />
                            </View>
                        </View>

                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 20, position: 'relative' }}>
                            <View style={{ position: 'relative', left: 0, }}>
                                <CategoriesBotton image={serveDefaultImages + "editorButtons.jpeg"} text="EDITOR" />
                            </View>
                            <View style={{ position: 'absolute', right: 0 }}>
                                <CategoriesBotton image={serveDefaultImages + "ilustradorButtons.jpeg"} text="ILUSTATOR" />
                            </View>
                        </View>

                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 20, position: 'relative' }}>
                            <View style={{ position: 'relative', left: 0, }}>
                                <CategoriesBotton image={serveDefaultImages + "/escritorButtons.jpeg"} text="SCRIPT           WRITTER" />
                            </View>
                            <View style={{ position: 'absolute', right: 0 }}>
                                <CategoriesBotton image={serveDefaultImages + "/fotografoButtons.jpeg"} text="PHOTOGRAPHER" />
                            </View>
                        </View>

                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 20, position: 'relative' }}>
                            <View style={{ position: 'relative', left: 0, }}>
                                <CategoriesBotton />
                            </View>
                            <View style={{ position: 'absolute', right: 0 }}>
                                <CategoriesBotton />
                            </View>
                        </View>

                    </View>


                </ScrollView>
            </View>
        </View>
    );
};

export default BuildTeamScreen;

const styles = StyleSheet.create({
    topContainer: {
        top: '8%',
        marginHorizontal: '8%'
    },
    slogan: {
        fontSize: 20,
        marginTop: '5%',
        color: '#E9E5F7',
    },

    boton: {
        width: '25%',
        backgroundColor: '#E9E5F7',
        borderRadius: 40,
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    botonText: {
        textAlign: 'center',
        padding: 5,
        fontSize: 12,
        color: '#FE893C',
        fontWeight: 'bold',
    }

})
