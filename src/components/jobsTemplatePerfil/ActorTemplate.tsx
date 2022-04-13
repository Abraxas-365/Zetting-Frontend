import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { User } from '../../interfaces/appInterfaces';
import FeaturesBox from '../perfilComponets/FeaturesBox';

type Props = {
    user: User,

}
const ActorTemplate = ({ user }: Props) => {

    let tamano = user!.features!.height == null ? "-" : user!.features!.height
    let age = user!.features!.age == null ? "-" : user!.features!.age
    let gender = user!.features!.gender == null ? "alien" : user!.features!.gender
    let description = user!.profession!.description == null ? "si no sabes donde ir no puedes estar perdido" : user!.profession!.description
    return (
        <View>
            <FeaturesBox age={age} gender={gender} tamano={tamano} />
            <View style={styleViews.aboutBox}>
                <Text style={styleText.smalTitles}>About</Text>
                <Text style={styleText.normal}>{description}</Text>
            </View>
            <View style={styleViews.SkillsBox}>
                <Text style={styleText.smalTitles}>Skills/Qualities</Text>
            </View>
            <View style={styleViews.ReelBox}>
                <Text style={styleText.smalTitles}>Acting Reel</Text>
            </View>
            <View style={styleViews.workExpBox}>
                <Text style={styleText.smalTitles}>Work Experience</Text>
            </View>
        </View>
    );
};

export default ActorTemplate;
const styleViews = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        marginHorizontal: '5%',
    },
    nameAndPerfil: {
        flexDirection: 'row',

    },
    nameAndProfession: {
        width: '80%',
        flexDirection: 'column',
    },

    perfilPercents: {
        borderRadius: 100,
        width: 45,
        height: 45,
        borderColor: '#E5E1F6',
        borderWidth: 1.5,
        alignSelf: 'center'
    },
    infoBoxes: {
        marginTop: 35,
        flexDirection: 'row'

    },
    aboutBox: {
        width: '70%',
        marginTop: 35

    },

    SkillsBox: {
        width: '70%',
        marginTop: 35

    },
    ReelBox: {
        width: '70%',
        marginTop: 35

    },
    workExpBox: {
        width: '70%',
        marginTop: 35

    },

})

const styleText = StyleSheet.create({
    normal: {

        color: '#e5e1f6',
        fontSize: 12,
        marginTop: 10,
        fontWeight: '500',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e5e1f6',
    },
    professions: {
        color: '#e5e1f6',
        fontSize: 12,
        marginTop: 10,
        fontWeight: '600',
    },

    smalTitles: {
        fontSize: 20,
        color: '#e5e1f6',
    },
})
