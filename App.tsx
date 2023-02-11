import { StatusBar } from 'expo-status-bar';
import {ThemeProvider } from 'styled-components'
import theme from '@global/styles/theme';

// import D from './src/assets/diamond.svg';
import {
  MerriweatherSans_300Light,
  MerriweatherSans_700Bold,
} from "@expo-google-fonts/merriweather-sans";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import * as SplashScreen from "expo-splash-screen";

import { Routes } from '@routes/index';


export default function App() {

  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    // MerriweatherSans_300Light,
    // MerriweatherSans_700Bold,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();


  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}