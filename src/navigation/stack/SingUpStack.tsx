import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenWellcome from '../../screens/singUp/wellcomScreen/ScreenWellcome';
import ScreenLogin from '../../screens/singUp/login/ScreenLogin';
import ScreenRegister from '../../screens/singUp/register/ScreenRegister';
import ScreenCheckEmail from '../../screens/singUp/register/ScreenCheckEmail';

const Stack = createStackNavigator();

export type RootStackParamList = {
};
const SignUpStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="ScreenWellcome"
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
            <Stack.Screen name='WellcomScreen' options={{ title: "WellcomScreen" }} component={ScreenWellcome} />
            <Stack.Screen name='LoginScreen' options={{ title: "LoginScreen" }} component={ScreenLogin} />
            <Stack.Screen name='RegisterScreen' options={{ title: "RegisterScreen" }} component={ScreenRegister} />
            <Stack.Screen name='CheckEmailScreen' options={{ title: "CheckEmailScreen" }} component={ScreenCheckEmail} />
        </Stack.Navigator>
    );
};

export default SignUpStack;
