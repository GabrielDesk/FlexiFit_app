import React, { useState } from 'react';
import { Text } from 'react-native';
import { Dimensions, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import { HomeScreen, ProfileScreen } from '../Screens/Tab/index';
import HomeScreen from '../Screens/Tab/HomeScreen/index';
import ProfileScreen from '../Screens/Tab/ProfileScreen/index';

import { TypeIcon, VectorIcon } from '../utils/VectorIconsUtil';
import { ICONS_NAME } from '../constants/icons';
import { COLORS } from '../constants/Colors';
import { FONTS } from '../constants/Fonts';

const { height } = Dimensions.get('window');

const Tab = createMaterialBottomTabNavigator();

const returnTitleTab = (name: string) => {
  let title;
  switch (name) {
    case 'Home':
      title = 'Home';
      break;

    case 'Buscar':
      title = 'Buscar';
      break;

    case 'ProfileScreen':
      title = 'Perfil';
      break;
  }
  return title;
};

const HomeStack = createStackNavigator();

const HomeStackScreens = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} />
  </HomeStack.Navigator>
);

export function MainRoutes() {
  const [tabBarColor, setTabBarColor] = useState(COLORS.BLACK);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      keyboardHidesNavigationBar
      sceneAnimationEnabled
      activeColor={COLORS.BRANCO_APP}
      barStyle={{
        // height: Platform.OS === 'ios' && height > 0 ? height * 0.07 : 60, // Ajuste a altura conforme necessário
        position: 'absolute',
        bottom: 30, // Distância da Tab Bar para a parte inferior da tela
        left: 20, // Distância da Tab Bar para a lateral esquerda da tela
        right: 20, // Distância da Tab Bar para a lateral direita da tela
        height: 60, // Altura da Tab Bar
        borderRadius: 30, // Bordas arredondadas
        backgroundColor: COLORS.ROXO_APP, // Cor de fundo da Tab Bar
        shadowColor: '#000', // Cor da sombra
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3, // Opacidade da sombra
        shadowRadius: 4, // Raio da sombra
        elevation: 5, // Elevação para Android
        alignItems: 'center', // Centraliza os ícones verticalmente
        justifyContent: 'space-around', // Espaçamento igual entre os ícones
        paddingHorizontal: 30, // Padding horizontal
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName = '';
          let type = TypeIcon.MATERIAL_COMMUNITY_ICONS;
          let iconNameFocus = '';

          switch (route.name) {
            case 'Home':
              type = TypeIcon.IONICONS;
              iconName = ICONS_NAME.IONICONS.HOME;
              iconNameFocus = ICONS_NAME.IONICONS.HOME;
              break;

            case 'ProfilePage':
              type = TypeIcon.MATERIAL_COMMUNITY_ICONS;
              iconName =
                ICONS_NAME.MATERIAL_COMMUNITY_ICONS.SHIELD_ACCOUNT_OUTLINE;
              iconNameFocus =
                ICONS_NAME.MATERIAL_COMMUNITY_ICONS.SHIELD_ACCOUNT;
              break;
            default:
              return null;
          }
          return (
            <VectorIcon
              type={type}
              IconName={focused ? iconNameFocus : iconName}
              IconSize={focused ? 20 : 22}
              IconColor={color}
              IconStyle={{}}
            />
          );
        },

        // tabBarLabel: (
        //   <Text style={{ fontFamily: FONTS.Montserrat_Bold, fontSize: 11 }}>
        //     {returnTitleTab(route.name)}
        //   </Text>
        // ),
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreens} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
