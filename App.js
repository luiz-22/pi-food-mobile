import 'react-native-gesture-handler';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import React, { useCallback } from 'react';
import { View, Text, StatusBar } from 'react-native'

import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import { Provider } from "react-redux";
import store from './redux/store'

import Navigation from './routes/navigation';

SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    "Kalam-Regular": require("./assets/fonts/Kalam-Regular.ttf"),
    "Kalam-Light": require("./assets/fonts/Kalam-Light.ttf"),
    "Kalam-Bold": require("./assets/fonts/Kalam-Bold.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store} PropTypes={ViewPropTypes}>
      <StatusBar backgroundColor="#000" />
      <Navigation onLayout={onLayoutRootView} />
    </Provider>
    // <View>
    //   <Text>Hola Mundo!!!</Text>
    // </View>
  );
}
