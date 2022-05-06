import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { COLORS } from './src/themes/colors/ZettingColors';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, es } from './i18n/supportedLanguages';
import useFonts from './src/hooks/font/useFonts';
import WorkerCard from './src/components/Cards/WorkerCard';
import GradiantView from './src/components/Gradients/GradiantView/GradiantView';
import CastingCard from './src/components/Cards/CastingCard/CastingCard';
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
    <SafeAreaView style={{ backgroundColor: COLORS.black, flex: 1 }}>
      <View style={{ marginHorizontal: '10%' }}>
        <CastingCard />
      </View>


    </SafeAreaView>
  );
}
export default App;
