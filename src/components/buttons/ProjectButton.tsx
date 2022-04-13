import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Switch from 'react-native-switch-toggles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/StackNavigator';
import { BellSvgActive, BellSvgInactive } from '../svg/BellSvg';
import { Project, User } from '../../interfaces/appInterfaces';
import { useBuildProjectCard } from '../../hooks/useProjectCard';
import { serveDefaultImages } from '../../api/apiCalls';

type Props = {
    project: Project
}

const ProjectBotton = ({ project }: Props) => {
    const { users } = useBuildProjectCard(project.id);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [isEnabled, setIsEnabled] = React.useState(true);
    // TODO: tell lorena to check what to do when no members
    let usersLen = users == null ? 0 : users.length;
    return (
        <TouchableOpacity style={{ ...styles.boton, backgroundColor: project.color }} onPress={() => navigation.navigate('ProyectoScreen', { project })}>
            <View style={styles.wrapper}>
                <View style={styles.viewLeft}>
                    <Text style={styles.title}>{project.name}</Text>
                    <Text style={styles.membersNumber}>{usersLen} Members</Text>

                    <View style={styles.members}>
                        <MembersPhotos users={users} />
                    </View>
                </View>
                <View style={styles.viewRight}>
                    <View style={styles.switchMoon}>
                        <Switch
                            size={33}
                            value={isEnabled}
                            onChange={(value) => setIsEnabled(value)}
                            activeTrackColor={'#6ab04c'}
                            renderInactiveThumbIcon={() => (

                                <BellSvgActive color={'red'} />)}
                            renderActiveThumbIcon={() => (

                                <BellSvgInactive border={'red'} color={project.color} />)}
                        />
                    </View>
                    <TouchableOpacity style={styles.Documents} onPress={() => navigation.navigate('ChatScreen')}>
                        <Text style={styles.chatText}>Documents</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </TouchableOpacity>
    );
};

type MembersPhotosProps = {
    users: Array<User>
}
const MembersPhotos = ({ users }: MembersPhotosProps) => {
    const defaultPic = serveDefaultImages + "noPerfil.png"
    let usersLen = users == null ? 0 : users.length;
    if (usersLen == 1) {
        let perfilImage = users[0].perfil_image == null ? defaultPic : serveDefaultImages + users[0].perfil_image
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                <Image
                    style={styles.memberPhotos}
                    source={{
                        uri: perfilImage
                    }}
                />
            </View>
        )
    }
    if (usersLen == 2) {
        let perfilImage = users[0].perfil_image == null ? defaultPic : serveDefaultImages + users[0].perfil_image
        let perfilImage2 = users[1].perfil_image == null ? defaultPic : serveDefaultImages + users[1].perfil_image
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                <Image
                    style={styles.memberPhotos}
                    source={{
                        uri: perfilImage
                    }}
                />
                <Image
                    style={styles.memberPhotos}
                    source={{
                        uri: perfilImage2
                    }}
                />
            </View>
        )
    }
    if (usersLen == 3) {
        let perfilImage = users[0].perfil_image == null ? defaultPic : serveDefaultImages + users[0].perfil_image
        let perfilImage2 = users[1].perfil_image == null ? defaultPic : serveDefaultImages + users[1].perfil_image
        let perfilImage3 = users[2].perfil_image == null ? defaultPic : serveDefaultImages + users[2].perfil_image
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                <Image
                    style={styles.memberPhotos}
                    source={{
                        uri: perfilImage
                    }}
                />
                <Image
                    style={styles.memberPhotos}
                    source={{
                        uri: perfilImage2
                    }}
                />
                <Image
                    style={styles.memberPhotos}
                    source={{
                        uri: perfilImage3
                    }}
                />
            </View>
        )
    }

    if (usersLen > 3) {
        let perfilImage = users[0].perfil_image == null ? defaultPic : serveDefaultImages + users[0].perfil_image
        let perfilImage2 = users[1].perfil_image == null ? defaultPic : serveDefaultImages + users[1].perfil_image
        let perfilImage3 = users[2].perfil_image == null ? defaultPic : serveDefaultImages + users[2].perfil_image
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                <Image
                    style={styles.memberPhotos}
                    source={{
                        uri: perfilImage
                    }}
                />
                <Image
                    style={styles.memberPhotos}
                    source={{
                        uri: perfilImage2
                    }}
                />
                <Image
                    style={styles.memberPhotos}
                    source={{
                        uri: perfilImage3
                    }}
                />
                <Text style={{ alignSelf: 'center', marginLeft: 20, color: '#E5E1F6', fontSize: 15 }}>+ {usersLen - 3}</Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>

        </View>

    )
}


export default ProjectBotton;

const styles = StyleSheet.create({
    membersNumber: {
        fontSize: 15,
        color: '#E5E1F6',

    },
    boton: {
        alignSelf: 'center',
        width: '100%',
        height: 138,
        marginBottom: 20,
        // backgroundColor: '#FF7F39',
        borderRadius: 9,

    },
    title: {
        fontSize: 20,
        color: '#E5E1F6',
        fontWeight: 'bold',
        marginBottom: 5
    },
    members: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
        marginLeft: '7%'

    },
    Documents: {
        borderColor: '#E5E1F6',
        borderWidth: 1.5,
        borderRadius: 40,
        position: 'absolute',
        right: 0,
        bottom: 0,

    },

    chatText: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        padding: '3%'
    },
    switchMoon: {
        position: 'absolute',
        right: 0,
    },
    viewLeft: {
        width: '50%',
        flexDirection: 'column',

    },
    viewRight: {
        width: '50%',
        flexDirection: 'column',

    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: '7%',
        marginHorizontal: '7%',
    },

    memberPhotos: {
        marginHorizontal: '-7%',
        backgroundColor: 'red',
        borderRadius: 100,
        height: 38,
        width: 38
    }

})
