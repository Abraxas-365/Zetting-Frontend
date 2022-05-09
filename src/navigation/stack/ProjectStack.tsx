import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenNewProject from '../../screens/project/createProject/newProject/ScreenNewProject';
import ScreenBuildTeam from '../../screens/project/createProject/buildTeam/ScreenBuildTeam';
import ScreenSearchForActors from '../../screens/project/findArtists/serchForActors/ScreenSearchForActors';

const Stack = createStackNavigator();

export type RootStackParamListProject = {
};
const ProjectStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="ScreenNewProject"
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
            <Stack.Screen name='NewProjectScreen' options={{ title: "NewProjectScreen" }} component={ScreenNewProject} />
            <Stack.Screen name='BuidTeamScreen' options={{ title: "BuidTeamScreen" }} component={ScreenBuildTeam} />
            <Stack.Screen name='SearchActors' options={{ title: "SearchActors" }} component={ScreenSearchForActors} />
        </Stack.Navigator>
    );
};

export default ProjectStack;
