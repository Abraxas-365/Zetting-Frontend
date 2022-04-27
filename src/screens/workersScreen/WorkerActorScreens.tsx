import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native'
import { StretchyScrollView } from 'react-native-stretchy';
import { serveDefaultImages } from '../../api/apiCalls';
import CustomAdjustableBotton from '../../components/buttons/CustomAdjustableButton';
import BlackInfoBottons from '../../components/perfilComponets/BlackInfoBottons';
import FeaturesBox from '../../components/perfilComponets/FeaturesBox';
import { AuthContext } from '../../context/AuthContext';
import { sendWorkRequest } from '../../hooks/useSendWorkRequest';
import { Project, User } from '../../interfaces/appInterfaces';
import { RootStackParamList } from '../../navigator/StackNavigator';
import { styleBackgrounds } from '../../themes/Backgrounds';




type PropsScroll = {
    worker?: User
    project?: Project

}
const SystretchyScrollView = ({ worker = {}, project }: PropsScroll) => {

    const { token } = useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    let price = worker!.profession!.price == null ? "_" : "S/" + worker!.profession!.price
    let tamano = worker!.features!.height == null ? "-" : worker!.features!.height
    let age = worker!.features!.age == null ? "-" : worker!.features!.age
    let gender = worker!.features!.gender == null ? "alien" : worker!.features!.gender
    let foto = worker!.perfil_image == null ? serveDefaultImages + "noPerfil.png" : serveDefaultImages + worker!.perfil_image
    let description = worker!.profession!.description == null ? "si no sabes donde ir no puedes estar perdido" : worker!.profession!.description
    return (
        <StretchyScrollView
            image={{ uri: foto }}
        >
            <View style={styleBackgrounds.fondoDark}>
                <View style={styleViews.wrapper}>
                    <View style={styleViews.nameAndPerfil}>
                        <View style={styleViews.nameAndProfession}>
                            <Text style={styleText.name}>{worker.name}</Text>
                            <Text style={styleText.professions}>Actor</Text>
                        </View>
                        <View style={styleViews.addButton}>
                            <CustomAdjustableBotton color="#FE893C" borderWidth={0} text="Add" onPress={() => sendWorkRequest(user, worker, project, navigation, token)} />
                        </View>
                    </View>
                    <View style={styleViews.infoBoxes}>
                        <BlackInfoBottons width={86} marginRight={'4%'} numbers={1} text={'Projects'} />
                        <BlackInfoBottons width={103} marginRight={'4%'} numbers={5} text={'Comments'} />
                        <BlackInfoBottons width={109} numbers={price} text={'Price'} />
                    </View>
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
            </View>
        </StretchyScrollView>
    );
}

interface Props extends StackScreenProps<RootStackParamList, 'WorkerActorScreen'> { }
const WorkerActorScreen = ({ route }: Props) => {
    console.log(route.params)

    return (
        <View style={styleBackgrounds.fondoDark}>
            <SystretchyScrollView worker={route.params.user} project={route.params.project} />
        </View>
    );
};

export default WorkerActorScreen;



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

    addButton: {
        marginTop: '5%'

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
