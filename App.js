import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   NativeEventEmitter,
//   PermissionsAndroid,
//   Platform,
//   NativeModules,
// } from 'react-native';

import {InitialNavigator} from './src/routes/InitialNavigator.routes';
import {
  configureFonts,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import {name as appName} from './app.json';

import LottieView from 'lottie-react-native';
import {FONTS} from './src/constants/Fonts';

const Stack = createStackNavigator();

const fontConfig = {
  default: {
    regular: {
      fontFamily: FONTS.Montserrat_Medium,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: FONTS.Montserrat_Medium,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: FONTS.Montserrat_Medium,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: FONTS.Montserrat_Black,
      fontWeight: 'normal',
    },
  },
};

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#333333',
  },
};

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...NavigationDarkTheme.colors,
    // ...PaperDarkTheme.colors,
    background: '#333333',
    text: '#ffffff',
  },
};

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme={theme}>

    <NavigationContainer
    theme={theme}
    >
      <Stack.Navigator >
        {InitialNavigator()}
        {/* // ({
          // firstOpen: firstOpen.current,
          // loginState,
        // })
        // } */}
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>

  );
}

export default App;
