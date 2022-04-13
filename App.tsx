import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { AuthProvider, ReloadProvider } from './src/context/AuthContext';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
// import { Tabs } from './src/navigator/Tabs';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  )
}
const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
export default App;
