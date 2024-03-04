import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import * as Animatable from 'react-native-animatable';
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
  getDayAtWeek,
  getFormattedDate,
} from '../../../utils/getDateInfo';

const { width } = Dimensions.get('window');

export function RecordsScreen({ navigation }) {
  const [backgroundImagePB, setBackgroundImagePB] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paramPageIndicator, setParamPageIndicator] = useState(1);
  const [checkIconName, setCheckIconName] = useState('');
  const [recordCardArrayProps, setRecordCardArrayProps] = useState([
    {
      id: 1,
      image: require('../../../../assets/images/recordImages/record2.png'),
      dateTitle: 'Segunda-feira',
      description: 'aeróbico acompanhado de musculação superior',
      cardStyles: {
        bgColor: COLORS.ROXO_APP,
      },
      checkExercises: [
        {
          id: 1,
          gymStation: 'Supino',
          titleExercise: '3x 15 repetições braço',
          checked: false,
        },
        {
          id: 2,
          gymStation: 'Supino superior',
          titleExercise: '3x 15 repetições de quadril',
          checked: false,
        },
        {
          id: 3,
          gymStation: 'Supino superior',
          titleExercise: '3x 15 repetições de quadril',
          checked: false,
        },
        {
          id: 4,
          gymStation: 'Supino superior',
          titleExercise: '3x 15  quadril',
          checked: false,
        },
        {
          id: 5,
          gymStation: 'Supino superior',
          titleExercise: '3x 15 repetições de ',
          checked: false,
        },
      ],
    },
    {
      id: 2,
      image: require('../../../../assets/images/recordImages/record6.png'),
      dateTitle: 'Terça-feira',
      description: 'funcional leve de trapézio',
      cardStyles: {
        bgColor: COLORS.BLUE_BUTTON,
      },
      checkExercises: [
        {
          id: 1,
          gymStation: 'Supino',
          titleExercise: '3x 15 repetições braço',
          checked: false,
        },
      ],
    },
    {
      id: 3,
      image: require('../../../../assets/images/recordImages/record9.png'),
      dateTitle: 'Quarta-feira',
      description: 'aeróbico acompanhado de musculação inferior',
      cardStyles: {
        bgColor: COLORS.VERDE_APP,
      },
      checkExercises: [
        {
          id: 1,
          gymStation: 'Supino',
          titleExercise: '3x 15 repetições perna',
          checked: false,
        },
      ],
    },
    {
      id: 4,
      image: require('../../../../assets/images/recordImages/record7.png'),
      dateTitle: 'Quinta-feira',
      description: 'aeróbico acompanhado de musculação inferior',
      cardStyles: {
        bgColor: COLORS.CLEAR_GRAY,
      },
      checkExercises: [
        {
          id: 1,
          gymStation: 'Supino',
          titleExercise: '3x 15 repetições perna',
          checked: false,
        },
      ],
    },
  ]);

  const flatListRef = useRef();

  function handleCheckExercises(cardId, exerciseId) {
    setRecordCardArrayProps((currentProps) =>
      currentProps.map((card) => {
        if (card.id === cardId) {
          return {
            ...card,
            checkExercises: card.checkExercises.map((exercise) => {
              if (exercise.id === exerciseId) {
                return { ...exercise, checked: !exercise.checked };
              }
              return exercise;
            }),
          };
        }
        return card;
      }),
    );
  }

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    // Atualiza o currentIndex para o item no centro
    if (viewableItems.length > 0) {
      const centerItem = viewableItems[0]; // Ajuste conforme necessário para encontrar o item central
      setCurrentIndex(centerItem.index);
    }
  }, []);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50, // Ajuste conforme necessário
  }).current;

  const recordCardContent = (item) => {
    return (
      <View
        style={{
          padding: '3%',
          maxHeight: 590,
          minHeight: 590,
          borderRadius: 20,
          width: width - 45,
          backgroundColor: item.cardStyles.bgColor,
          // shadowColor: '#e0e0e0',
          // shadowOffset: {
          //   width: 0,
          //   height: 10,
          // },
          // shadowOpacity: 0.53,
          // shadowRadius: 13.97,
          // elevation: 21,
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',

            // backgroundColor: COLORS.AMARELOESCURO_APP,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: 200,
              height: 200,
              // backgroundColor: COLORS.AMARELO_APP,
            }}
            resizeMode="cover"
          />

          <View
            style={{
              alignItems: 'center',
              // justifyContent: 'space-around',
            }}
          >
            <Text
              style={{
                color: COLORS.BRANCO_APP,
                fontSize: 18,
                fontFamily: FONTS.Poppins_Bold,
              }}
            >
              {item.dateTitle}
            </Text>
            <Text
              style={{
                color: COLORS.BRANCO_APP,
                fontSize: 16,
                fontFamily: FONTS.Poppins_Medium,
                textAlign: 'center',
              }}
            >
              {item.description}
            </Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: '5%',
            padding: '3%',
            // alignItems: 'baseline',
          }}
        >
          <View
            style={{
              justifyContent: 'flex-start',
            }}
          >
            {checkItemsComponent(item.checkExercises, item.id)}
          </View>
        </ScrollView>
      </View>
    );
  };

  const checkItemsComponent = (checksItem, cardId) => {
    return (
      <View style={{ width: '100%', height: '100%', flexDirection: 'column' }}>
        {checksItem.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: '3%',
            }}
          >
            <TouchableOpacity
              onPress={() => handleCheckExercises(cardId, item.id)}
            >
              <VectorIcon
                IconName={
                  item.checked ? 'checkmark-circle' : 'checkmark-circle-outline'
                }
                IconType={TypeIcon.IONICONS}
                IconSize={22}
                IconColor={COLORS.BRANCO_APP}
                IconStyle={{ marginBottom: '20%', marginHorizontal: '1%' }}
              />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  fontFamily: FONTS.Poppins_Bold,
                  fontSize: 14,
                  color: COLORS.BRANCO_APP,
                }}
              >
                {item.titleExercise}
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Poppins_BoldItalic,
                  fontSize: 10,
                  color: COLORS.BRANCO_APP,
                  marginBottom: 10,
                }}
              >
                {item.gymStation}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  };
  const renderIndicator = () => (
    <View style={styles.indicatorContainer}>
      {recordCardArrayProps.map((item, index) => (
        <Animatable.View
          animation="slideInLeft"
          key={index}
          style={[
            styles.indicator,
            currentIndex == index && styles.activeIndicator,
          ]}
        />
      ))}
    </View>
  );

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
              Minhas Fichas
            </Text>
          </View>
        </View>

        <ScrollView
          vertical
          style={{
            height: 10000080,
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* card container */}
            <FlatList
              ref={flatListRef}
              data={recordCardArrayProps}
              renderItem={({ item }) => recordCardContent(item)}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={viewabilityConfig}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{
                alignItems: 'center',
                paddingHorizontal: 0,
                gap: 10,
                marginVertical: '5%',
              }}
            />
            {/* indicator card */}
            <View
              style={{
                width: '90%',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',

                // backgroundColor: COLORS.ROXO_APP,
              }}
            >
              {renderIndicator()}

              {/* <Text
              style={{
                fontFamily: FONTS.Poppins_Medium,
                fontSize: 14,
                color: COLORS.ROXO_APP,
              }}
            >
              indicator card component
            </Text> */}
            </View>
            <View
              style={{
                width: '100%',
                padding: '4%',
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Poppins_Bold,
                  fontSize: 11,
                  color: COLORS.BLACK,
                  textAlign: 'center',
                }}
              >
                *Em caso de duvida sobre as repetições e o método, contate seu
                treinador ou supervisor físico
              </Text>
            </View>
          </View>
        </ScrollView>
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
  // container: {
  //   flex: 1,
  // },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: COLORS.ROXO_APP,
  },
  cardStyle: {
    width: width, // Largura total da tela
    height: 530,
    borderRadius: 20,
    padding: '3%', // Ajuste o padding interno conforme necessário
    backgroundColor: '#FFF', // Substitua pela sua cor de fundo
    shadowColor: '#e0e0e0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
});
