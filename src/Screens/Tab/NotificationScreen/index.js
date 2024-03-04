import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  PanResponder,
  Dimensions,
} from 'react-native';
import {
  TouchableOpacity,
  PanGestureHandler,
  ScrollView,
  FlatList,
} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TypeIcon, VectorIcon } from '../../../utils/VectorIconsUtil';
// import { useTheme } from '../../../context/ThemeContext';
import { COLORS } from '../../../constants/Colors';
import {
  getImagesFromPixBay,
  getRandomImagesFromUnsplash,
} from '../../../services/apis/pixbay';
import LinearGradient from 'react-native-linear-gradient';
import { FONTS } from '../../../constants/Fonts';
import {
  getDateUtcNow,
  getDateUtcNowBrazil,
  getDayAtWeek,
  getFormattedDate,
} from '../../../utils/getDateInfo';
import { getAdapter } from 'axios';

const { width } = Dimensions.get('window');

export function NotificationScreen() {
  const [backgroundImagePB, setBackgroundImagePB] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notificationData, setNotificationData] = useState([
    {
      id: 0,
      titleDescription: 'Sua fatura foi paga e aprovada com sucesso!.',
      dateInfo: '4h',
      iconName: 'checkmark-done',
      infoColor: COLORS.VERDE_APP,
      actFunction: () => null,
    },
    {
      id: 1,
      titleDescription:
        'Sua fatura atual está prestes a vencer, pague pelo aplicativo ou entre em contato com a academia.',
      dateInfo: '2d',
      iconName: 'information-circle-outline',
      infoColor: COLORS.VERMELHO_APP,
      bgColor: COLORS.BLUE_BUTTON,
      actFunction: () => null,
    },
    {
      id: 2,
      titleDescription: 'Novas aulas de yoga adicionadas ao calendário.',
      dateInfo: '1d',
      iconName: 'calendar-outline',
      infoColor: COLORS.BRANCO_APP,
      actFunction: () => alert('Aulas de Yoga!'),
    },
    {
      id: 3,
      titleDescription:
        'Promoção especial disponível! Confira as novas ofertas na loja.',
      dateInfo: '3d',
      iconName: 'pricetags-outline',
      infoColor: COLORS.AMARELO_APP,
      actFunction: () => alert('Promoções!'),
    },
    // Novos modelos adicionados
    {
      id: 4,
      titleDescription: 'Lembrete: Avaliação física agendada para amanhã.',
      dateInfo: '5h',
      iconName: 'body-outline',
      infoColor: COLORS.CLEAR_GRAY,
      actFunction: () => alert('Avaliação Física!'),
    },
    {
      id: 5,
      titleDescription:
        'Atualização importante! Leia as últimas notícias no nosso blog.',
      dateInfo: '6d',
      iconName: 'newspaper-outline',
      infoColor: COLORS.VERDE_APP,
      actFunction: () => alert('Notícias!'),
    },
    {
      id: 6,
      titleDescription:
        'Seu treino personalizado foi atualizado. Confira as novidades!',
      dateInfo: '1d',
      iconName: 'fitness-outline',
      infoColor: COLORS.BLUE_BUTTON,
      actFunction: () => alert('Treino Atualizado!'),
    },
    {
      id: 7,
      titleDescription:
        'Feedback do treinador disponível para a sua última sessão.',
      dateInfo: '3d',
      iconName: 'thumbs-up-outline',
      infoColor: COLORS.VERDE_APP,
      actFunction: () => alert('Feedback do Treinador!'),
    },
    {
      id: 8,
      titleDescription: 'Nova mensagem do suporte. Toque para ler.',
      dateInfo: '2h',
      iconName: 'chatbubbles-outline',
      infoColor: COLORS.AMARELO_APP,
      actFunction: () => alert('Nova Mensagem do Suporte!'),
    },
    {
      id: 9,
      titleDescription:
        'Evento especial esta semana: Workshop de nutrição. Inscreva-se!',
      dateInfo: '4d',
      iconName: 'nutrition-outline',
      infoColor: COLORS.VERMELHO_APP,
      bgColor: COLORS.BLUE_BUTTON,
      actFunction: () => alert('Workshop de Nutrição!'),
    },
  ]);

  const renderNotificationCard = ({ item }) => {
    console.log({ item });

    return (
      <>
        {/* Embleem indicator */}
        <View
          style={{
            minHeight: 90,
            maxHeight: 90,
            width: '100%',
            borderRadius: 20,
            flexDirection: 'row',
            padding: '2%',
            backgroundColor: COLORS.ROXO2_APP,
          }}
        >
          <View
            style={{
              width: '15%',
              height: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <Image
            source={{
              uri: 'https://i.imgur.com/tlfeMKB.png',
            }}
            style={{ width: 200, height: 200 }}
          /> */}

            <VectorIcon
              IconName={item.iconName}
              IconType={TypeIcon.IONICONS}
              IconSize={30}
              IconColor={item.infoColor}
            />
          </View>

          <View
            style={{
              width: '70%',
              justifyContent: 'space-evenly',
              paddingVertical: '4%',
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Poppins_Bold,
                fontSize: 13,
                // width: '70%',
                color: COLORS.WHITE,
              }}
            >
              {item.titleDescription}
            </Text>

            <Text
              style={{
                fontFamily: FONTS.Poppins_MediumItalic,
                fontSize: 12,
                // width: '70%',
                color: item.infoColor,
              }}
            >
              {item.dateInfo}
            </Text>

            {/* <TouchableOpacity
            style={{
              width: '70%',
              height: '47%',
              padding: '3%',
              backgroundColor: COLORS.BLUE_BUTTON,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Poppins_Bold,
                fontSize: 18,
                color: COLORS.WHITE,
              }}
            >
              Ler QRCode
            </Text>
          </TouchableOpacity> */}
          </View>

          {/* <View
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: COLORS.AMARELOESCURO_APP,
            }}
          >
            <View
              style={{
                width: '20%',
                height: '90%',
                borderRadius: 20,
                backgroundColor: item.infoColor,
                justifyContent: 'space-evenly',
              }}
            />
          </View> */}
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />

      {/* Main */}
      <View
        style={{
          padding: '5%',
        }}
      >
        {/* header information */}
        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            // backgroundColor: COLORS.CINZACLARO_APP,
          }}
        >
          {/* back button icon */}
          <View
            style={{
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <VectorIcon
                IconName="arrow-back-ios"
                IconType={TypeIcon.MATERIAL_ICONS}
                IconSize={24}
                IconColor={COLORS.BLACK}
              />
            </TouchableOpacity>
          </View>

          <View style={{ width: '90%', alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: FONTS.Poppins_Black_Italic,
                fontSize: 24,
              }}
            >
              Notificações
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
          }}
        >
          {/* card container */}
          <FlatList
            data={notificationData}
            renderItem={({ item }) => renderNotificationCard({ item })}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              gap: 10,
              marginVertical: '5%',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  frontSideContainer: {
    flex: 1,
    // backgroundColor: COLORS.AMARELOESCURO_APP
  },
  frontSideButtonsContainer: {
    width: '100%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    // backgroundColor: COLORS.AMARELOESCURO_APP,
    position: 'absolute',
    bottom: 10,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
  },
  chartCard: {
    width: '100%',
    marginTop: 10,
    // height: '100%',
    // alignSelf: 'center',
    flexDirection: 'row',
    padding: '5%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  labelsContainer: {
    // position: 'absolute',
    // left: 10,
    // height: '100%',
    // backgroundColor: COLORS.ROXO2_APP,
    // flexDirection: 'row',
    alignItems: 'center',
    width: '10%',
    justifyContent: 'space-between',
  },
  label: {
    // position: 'absolute',
    // left: -50,
    fontFamily: FONTS.Poppins_MediumItalic,
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    // marginLRight: '5%',
    height: 150,
    width: '80%',
    // backgroundColor: COLORS.AMARELOESCURO_APP,
  },
  actionButtonSeeMoreContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    // marginLRight: '5%',
    height: 'auto',
    width: '15%',
    right: 18,
    // backgroundColor: COLORS.AMARELOESCURO_APP,
  },
  actionButtonSeeMoreContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    marginHorizontal: 20,

    // flexDirection: 'row',
  },
  bar: {
    borderRadius: 20,
    width: width * 0.05,
  },
  dashedLine: {
    // position: 'absolute',
    gap: 10,
    width: 0.01,
    height: '100%',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: 'grey',
  },
  barText: {
    marginTop: 4,
    fontFamily: FONTS.Poppins_Medium,
    fontSize: 14,
    color: COLORS.BLACK,
  },
  barIndicatorsContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '80%',
    // width: '5%',
    flexDirection: 'row',
  },
  tagsBarIndicatorsContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    // height: '100%',
    // width: '20%',
    gap: 10,
    flexDirection: 'row',
  },
});
