import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, es } from './i18n/supportedLanguages';
import useFonts from './src/functionalities/fonts/hooks/useFonts';
import { NavigationContainer } from '@react-navigation/native';
import SignUpStack from './src/navigation/SingUpStack'

const App = () => {
  i18n.fallbacks = true;
  i18n.translations = { en, es };
  i18n.locale = Localization.locale;
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }
  return (
    <NavigationContainer>
      <SignUpStack />
    </NavigationContainer>

  );
}
export default App;
