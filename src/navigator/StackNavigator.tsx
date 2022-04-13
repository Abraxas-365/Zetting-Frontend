import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs, { BottomTabsPerfil } from './BottomTabs';
import WorkerActorScreen from '../screens/workersScreen/WorkerActorScreens';
import { Project, User } from '../interfaces/appInterfaces';
import LoginScreen from '../screens/signInUp/LoginScreen';
import SignInScreen from '../screens/signInUp/SignInScreen';
import RegisterScreen from '../screens/signInUp/RegisterScreen';
import Register2Screen from '../screens/signInUp/Register2Screen';
import HomeScreen from '../screens/bottomTabScreen/HomeScreen';
import ChatScreen from '../screens/project/ChatScreen';
import ProyectoScreen from '../screens/project/ProyectScreen';
import CreateProyectScreen from '../screens/project/CreateProyectScreen';
import BuildTeamScreen from '../screens/project/BuildTeamScreen';
import ActorsScreen from '../screens/workersScreen/ActorsScreen';
import FilterActorScreen from '../screens/filters/FilterActorScreen';
import ProfileScreen from '../screens/bottomTabScreen/ProfileScreen';
import EditPerfilScreen from '../screens/users/EditPerfilScreen';

export type RootStackParamList = {
    LoginScreen: undefined;
    SignInScreen: undefined;
    Register2Screen: { email: string };
    RegisterScreen: undefined;
    HomeScreen: undefined;
    BottomTabs: undefined;
    ChatScreen: undefined;
    ProyectoScreen: { project: Project | undefined };
    CreateProyectScreen: undefined;
    BuildTeamScreen: { data: any };
    ActorsScreen: { pid: string };
    FilterActorScreen: undefined;
    WorkerActorScreen: { user: User, pid?: string };
    ProfileScreen: { user: User };
    EditPerfilScreen: { user: User };
};


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            // initialRouteName="Pagina2Screen"
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name='LoginScreen' options={{ title: "LoginScreen" }} component={LoginScreen} />
            <Stack.Screen name="SignInScreen" options={{ title: "SignInScreen" }} component={SignInScreen} />
            <Stack.Screen name="RegisterScreen" options={{ title: "RegisterScreen" }} component={RegisterScreen} />
            <Stack.Screen name="Register2Screen" options={{ title: "Register2Screen" }} component={Register2Screen} />
            <Stack.Screen name="HomeScreen" options={{ title: "HomeScreen" }} component={HomeScreen} />
            <Stack.Screen name="BottomTabs" options={{ title: "BottomTabs" }} component={BottomTabs} />
            <Stack.Screen name="BottomTabsPerfil" options={{ title: "BottomTabsPerfil" }} component={BottomTabsPerfil} />
            <Stack.Screen name="ChatScreen" options={{ title: "ChatScreen" }} component={ChatScreen} />
            <Stack.Screen name="ProyectoScreen" options={{ title: "ProyectoScreen" }} component={ProyectoScreen} />
            <Stack.Screen name="CreateProyectScreen" options={{ title: "CreateProyectScreen" }} component={CreateProyectScreen} />
            <Stack.Screen name="BuildTeamScreen" options={{ title: "BuildTeamScreen" }} component={BuildTeamScreen} />
            <Stack.Screen name="ActorsScreen" options={{ title: "ActorsScreen" }} component={ActorsScreen} />
            <Stack.Screen name="FilterActorScreen" options={{ title: "FilterActorScreen" }} component={FilterActorScreen} />
            <Stack.Screen name="WorkerActorScreen" options={{ title: "WorkerActorScreen" }} component={WorkerActorScreen} />
            <Stack.Screen name="ProfileScreen" options={{ title: "ProfileScreen" }} component={ProfileScreen} />
            <Stack.Screen name="EditPerfilScreen" options={{ title: "EditPerfilScreen" }} component={EditPerfilScreen} />

        </Stack.Navigator>
    );
}
