import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenNewProject from '../../screens/project/createProject/newProject/ScreenNewProject';

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
        </Stack.Navigator>
    );
};

export default ProjectStack;
