import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BottomTabs from '../bottonTabs/HomeBottomTabs';
import ProjectStack from '../stack/ProjectStack';
import SignUpStack from '../stack/SingUpStack';

const Stack = createStackNavigator();
export type RootStackParamList = {
};
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="BottomTabs"
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

                <Stack.Screen name='HomeScreen' options={{ title: "HomeScreen" }} component={BottomTabs} />
                <Stack.Screen name='NewProjectStack' options={{ title: "NewProjectStack" }} component={ProjectStack} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default MainNavigator;
