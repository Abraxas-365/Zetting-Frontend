import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';
import { serveDefaultImages } from '../../api/apiCalls';
import { useGetWorkRequest } from '../../hooks/useGetWorkRequest';
import { useBuildNotification } from '../../hooks/useNotifications';
import { useGetProjectById } from '../../hooks/useProjects';
import { useUser } from '../../hooks/useUser';
import { Notification, Project } from '../../interfaces/appInterfaces';
import { RootStackParamList } from '../../navigator/StackNavigator';


type Props = {
    notification: Notification
}

const NotificationCard = ({ notification }: Props) => {
    const { project, user, workRequest } = useBuildNotification(notification)
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const defaultPic = serveDefaultImages + "noPerfil.png"
    let perfilImage = user.perfil_image == null ? defaultPic : serveDefaultImages + user.perfil_image

    const TypeMessage = () => {
        switch (notification.type) {
            case "new-work-request":
                return (
                    <View style={container.textContainer}>
                        <Text style={text.nameText}>{user.name}</Text>
                        <Text style={text.projectName}>{project.name}</Text>
                        <Text style={text.massagesText}>{notification.message} {user.name}</Text>
                    </View>
                )
            default:

                return (<View />)
        }
    }

    return (

        <TouchableOpacity style={container.container} activeOpacity={0.7}   >
            <View style={container.cardStyle}>
                <View style={{ ...container.readIndicatorStyle, backgroundColor: notification.is_read ? '#23232B' : '#FF7F39' }} />
                <View style={container.profileImageContainer}>
                    <Image
                        style={{ borderRadius: 100, width: 45, height: 45, borderColor: '#E5E1F6', borderWidth: 1.5 }}
                        source={{
                            uri: perfilImage
                        }}
                    />
                </View>
                <TypeMessage />

                <View style={container.referenceImageContainer}>
                    <Image
                        style={{ borderRadius: 4, width: 59, height: 42 }}
                        source={{
                            uri: perfilImage
                        }}
                    />
                </View>
            </View>
        </TouchableOpacity >

    );
};





export default NotificationCard;

const container = StyleSheet.create({
    cardStyle: {
        width: '100%',
        flexDirection: 'row'
    },
    container: {

        borderBottomWidth: 1,
        borderBottomColor: '#E5E1F6',
        height: 63,
    },
    readIndicatorStyle: {
        width: 7,
        height: 7,
        borderRadius: 100,
        alignSelf: 'center',
        marginRight: 10
    },
    profileImageContainer: {

        alignSelf: 'center',
    },

    referenceImageContainer: {
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
    },
    textContainer: {
        flexDirection: 'column',
        marginHorizontal: '8%'

    },
})

const text = StyleSheet.create({
    projectName: {
        fontSize: 15,
        color: '#E5E1F6',
        marginBottom: 2,
        fontWeight: '500',
    },
    nameText: {
        fontSize: 15,
        color: '#E5E1F6',
        marginBottom: 2,
        fontWeight: '500',
    },
    massagesText: {
        fontSize: 10,
        color: '#E5E1F6',

    }
})
