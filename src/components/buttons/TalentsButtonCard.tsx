
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { User } from '../../interfaces/appInterfaces';
import { serveDefaultImages } from '../../api/apiCalls';
import { RootStackParamList } from '../../navigator/StackNavigator';

type Props = {
    user?: User
    pid?: string
    color?: string
}

const TalentsButtonCard = ({ user = {}, color = '#FF7F39', pid }: Props) => {
    console.log('talets button pid', pid);
    const defaultPic = serveDefaultImages + "noPerfil.png"

    let perfilImage = user.perfil_image == null ? defaultPic : serveDefaultImages + user.perfil_image
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <TouchableOpacity style={{ ...styles.boton, backgroundColor: color }} onPress={() => navigation.navigate('WorkerActorScreen', { user, pid })}>
            <View style={styles.wrapper}>
                <View style={{ ...styles.viewLeft, overflow: 'hidden' }}>
                    <Image style={{ flex: 1, overflow: 'hidden', borderTopLeftRadius: 9, borderBottomLeftRadius: 9 }} source={{ uri: perfilImage }} />
                </View>
                <View style={styles.viewRight}>
                    <Text style={{ ...styles.title, marginTop: '8%', marginHorizontal: '8%' }}>{user.name} </Text>
                    <Text style={{ ...styles.description, marginTop: '8%', marginHorizontal: '8%' }}>{user.profession!.description}</Text>
                    <View style={{ position: 'absolute', bottom: 10, marginHorizontal: '8%', flexDirection: 'row' }}>
                        <Text style={{ ...styles.preciou }}>S/{user.profession!.price}</Text>

                        <Text style={{ fontSize: 12, bottom: -8, marginHorizontal: '8%', color: '#E5E1F6' }}>xH</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
};

export default TalentsButtonCard;


const styles = StyleSheet.create({
    boton: {
        height: 138,
        marginBottom: 20,
        borderRadius: 9,

    },
    title: {
        fontSize: 18,
        color: '#E5E1F6',
        fontWeight: "500",
    },
    description: {
        fontSize: 12,
        color: '#E5E1F6'
    },
    viewLeft: {
        width: '38%',
        flexDirection: 'column',

    },
    viewRight: {
        width: '50%',
        flexDirection: 'column',

    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    preciou: {
        fontSize: 20,
        color: '#E5E1F6',
    }

})
