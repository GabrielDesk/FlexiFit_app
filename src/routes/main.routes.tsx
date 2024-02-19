import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  ProfileScreen,
  NotificationScreen,
  RecordsScreen,
} from '../Screens/Tab/index';
// import HomeScreen from '../Screens/Tab/HomeScreen/index';
// import ProfileScreen from '../Screens/Tab/ProfileScreen/index';

import { TypeIcon, VectorIcon } from '../utils/VectorIconsUtil';
import { ICONS_NAME } from '../constants/icons';
import { COLORS } from '../constants/Colors';
import { FONTS } from '../constants/Fonts';

const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

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
    <HomeStack.Screen name="RecordsScreen" component={RecordsScreen} />
    <HomeStack.Screen
      name="NotificationScreen"
      component={NotificationScreen}
    />
  </HomeStack.Navigator>
);

const MyTabBar = ({ state, navigation }) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        let iconName;
        let iconType;

        console.log(route.name);

        switch (route.name) {
          case 'Home':
            iconType = TypeIcon.IONICONS;
            iconName = isFocused ? 'home' : 'home-outline';
            break;
          case 'RecordsScreen':
            iconType = TypeIcon.IONICONS;
            iconName = isFocused ? 'albums' : 'albums-outline';
            break;
          case 'NotificationScreen':
            iconType = TypeIcon.IONICONS;
            iconName = isFocused ? 'notifications' : 'notifications-outline';
            break;
          case 'Profile':
            iconType = TypeIcon.FONT_AWESOME;
            iconName = isFocused ? 'user' : 'user-o';
            break;
          default:
            return null;
        }

        const onPress = () => navigation.navigate(route.name);

        return (
          <View
            // key={index}
            style={
              styles.mainItemContainer
              // { borderRightWidth: label == 'notes' ? 3 : 0 },
            }
          >
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              // style={[
              //   styles.mainItemContainer,
              //   { backgroundColor: isFocused ? '#030D16' : COLORS.ROXO_APP },
              // ]}
            >
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  flex: 1,
                  // padding: 10,
                }}
              >
                <VectorIcon
                  IconType={iconType}
                  IconName={iconName}
                  IconSize={isFocused ? 28 : 26}
                  IconColor={'#f1f1f1'}
                  IconStyle={{}}
                />
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    // height: Platform.OS === 'ios' && height > 0 ? height * 70 : 60,
    position: 'absolute',
    bottom: 28,
    backgroundColor: COLORS.ROXO_APP,
    borderRadius: 50,
    marginHorizontal: width * 0.1,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    // borderRadius: 1,
    borderColor: COLORS.ROXO_APP,
    // gap: 15,
  },
});

export function MainRoutes() {
  const [tabBarColor, setTabBarColor] = useState(COLORS.BLACK);

  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName = '';
          let type = TypeIcon.MATERIAL_COMMUNITY_ICONS;
          let iconNameFocus = '';

          switch (route.name) {
            case 'Home':
              type = TypeIcon.IONICONS;
              iconName = focused ? 'barbell' : 'barbell-outline'; // Alterar para o ícone de não focado
              break;
            case 'RecordsScreen':
              type = TypeIcon.IONICONS;
              iconName = focused ? 'albums' : 'albums-outline'; // Alterar para o ícone de não focado
              break;
            case 'NotificationScreen':
              type = TypeIcon.IONICONS;
              iconName = focused ? 'notifications' : 'notifications-outline'; // Alterar para o ícone de não focado
              break;
            case 'Profile':
              type = TypeIcon.FONT_AWESOME;
              iconName = focused ? 'user' : 'user-o'; // Alterar para o ícone de não focado
              break;
            // Adicionar casos para outras rotas conforme necessário
            default:
              return null;
          }
          return (
            <VectorIcon
              type={type}
              IconName={focused ? iconNameFocus : iconName}
              IconSize={focused ? 22 : 24}
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
      labeled={false}
      headerShown={false}
      activeColor={COLORS.BRANCO_APP}
      // barStyle={{
      //   //height: Platform.OS === 'ios' && height > 0 ? height * 0.07 : 60, // Ajuste a altura conforme necessário
      //   position: 'absolute',
      //   bottom: 30, // Distância da Tab Bar para a parte inferior da tela
      //   left: 20, // Distância da Tab Bar para a lateral esquerda da tela
      //   right: 20, // Distância da Tab Bar para a lateral direita da tela
      //   height: 60, // Altura da Tab Bar
      //   borderRadius: 30, // Bordas arredondadas
      //   backgroundColor: COLORS.ROXO_APP, // Cor de fundo da Tab Bar
      //   shadowColor: '#000', // Cor da sombra
      //   shadowOffset: {
      //     width: 0,
      //     height: 4,
      //   },
      //   shadowOpacity: 0.3, // Opacidade da sombra
      //   shadowRadius: 4, // Raio da sombra
      //   elevation: 5, // Elevação para Android
      //   // alignItems: 'center', // Centraliza os ícones verticalmente
      //   // justifyContent: 'space-around', // Espaçamento igual entre os ícones
      //   paddingHorizontal: 30, // Padding horizontal
      //   marginVertical: 10,
      //   paddingVertical: 10, // Padding horizontal
      //   // padding: 80,
      //   margin: 10,
      //   // position: 'absolute',
      // }}
    >
      <Tab.Screen name="Home" component={HomeStackScreens} />
      <Tab.Screen name="RecordsScreen" component={RecordsScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
