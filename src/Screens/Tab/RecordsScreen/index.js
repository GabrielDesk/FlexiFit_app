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
  getDayAtWeek,
  getFormattedDate,
} from '../../../utils/getDateInfo';

const { width } = Dimensions.get('window');

export function RecordsScreen() {
  const [backgroundImagePB, setBackgroundImagePB] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paramPageIndicator, setParamPageIndicator] = useState(1);

  const productCard = (bgColor = COLORS.AMARELOESCURO_APP) => (
    <View
      style={{
        height: 150,
        width: 350,
        borderRadius: 20,
        flexDirection: 'row',
        padding: '2%',
        backgroundColor: bgColor,
        marginHorizontal: 5,
      }}
    >
      <View
        style={{
          width: '60%',
          height: 150,
          justifyContent: 'space-evenly',
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.Poppins_Bold,
            fontSize: 20,
            color: COLORS.BLACK,
          }}
        >
          Minhas Fichas
        </Text>

        <Text
          style={{
            fontFamily: FONTS.Poppins_SemiBold,
            fontSize: 14,
            color: COLORS.BLACK,
          }}
        >
          Acompanhe suas fichas com apenas um toque
        </Text>

        <TouchableOpacity
          style={{
            width: '70%',
            height: '47%',
            padding: '3%',
            backgroundColor: COLORS.BLACK_BUTTON_APP,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.Poppins_Bold,
              // fontSize: 18,
              color: COLORS.WHITE,
            }}
          >
            Ver Mais
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '40%',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={{
            uri: 'https://i.imgur.com/2uymtgx.png',
          }}
          style={{ width: 130, height: 130 }}
        />
      </View>
    </View>
  );

  const BarChartCard = () => {
    // Array de objetos com altura das barras e os meses
    const bars = [
      { height: 70, month: 'Jan' },
      { height: 80, month: 'Fev' },
      { height: 60, month: 'Mar' },
      { height: 90, month: 'Abr' },
      { height: 50, month: 'Mai' },
      { height: 100, month: 'Jun' },
      { height: 40, month: 'Jul' },
    ];

    // Alturas para os labels 'Médio', 'Bom' e 'Muito Bom'
    const labels = [
      { labelText: 'Alto', labelValues: 160 },
      { labelText: 'Médio', labelValues: 140 },
      { labelText: 'Baixo', labelValues: 120 },
      { labelText: 'Base', labelValues: 100 },
    ];

    return (
      <View style={styles.chartCard}>
        <View style={styles.labelsContainer}>
          {labels.flatMap((labelItem) => (
            <>
              <View style={styles.tagsBarIndicatorsContainer}>
                {/* <Text key={label} style={[styles.label, { bottom: `${yHeight}%` }]}> */}
                <Text style={styles.label}>{labelItem.labelValues}</Text>
              </View>
            </>
          ))}
        </View>

        <View style={styles.barContainer}>
          {bars.map(({ height, month }, index) => (
            <View key={index} style={styles.barWrapper}>
              {/* {' '} */}
              {/* Linha tracejada à esquerda */}
              <View style={styles.barIndicatorsContainer}>
                {/* {index > 0 && <View style={styles.dashedLine} />} */}
                <LinearGradient
                  colors={[COLORS.WHITE, COLORS.ROXO_APP]}
                  start={{ x: 0, y: 1.5 }}
                  end={{ x: 0, y: 0 }}
                  style={[styles.bar, { height: `${height}%` }]}
                />
              </View>
              <Text style={styles.barText}>{month}</Text>
              {/* {' '} */}
              {/* Linha tracejada à direita */}
            </View>
          ))}
        </View>

        <View style={styles.actionButtonSeeMoreContainer}>
          <View style={styles.actionButtonSeeMoreContent}>
            <Text
              style={{
                fontFamily: FONTS.Poppins_Medium,
                fontSize: 10,
                color: COLORS.ROXO_APP,
              }}
            >
              Ver Mais
            </Text>
            <VectorIcon
              IconName="add-circle-outline"
              IconType={TypeIcon.IONICONS}
              IconSize={22}
            />
          </View>
        </View>
      </View>
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
        <View style={{ height: 90, flexDirection: 'row' }}>
          {/* name */}
          <View style={{ width: '80%' }}>
            <Text
              style={{
                fontFamily: FONTS.Poppins_Black_Italic,
                fontSize: 24,
              }}
            >
              Hey Rahul
            </Text>

            <Text
              style={{
                fontFamily: FONTS.Poppins_MediumItalic,
                fontSize: 14,
              }}
            >
              Bora treinar!
            </Text>
          </View>

          <View style={{ width: '20%' }}>
            <Image
              source={{
                uri: 'https://www.thesouthafrican.com/wp-content/uploads/2019/02/d6393b36-thispersondoesnotexist-800x529.jpg',
              }}
              style={{ width: 50, height: 50, borderRadius: 100 }}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* cards container */}
        <View>
          {/* ScanQR */}
          <View
            style={{
              height: 150,
              width: '100%',
              borderRadius: 20,
              flexDirection: 'row',
              padding: '4%',
              backgroundColor: COLORS.ROXO2_APP,
            }}
          >
            <View
              style={{
                width: '60%',
                height: 150,
                justifyContent: 'space-evenly',
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Poppins_Bold,
                  fontSize: 18,
                  color: COLORS.WHITE,
                }}
              >
                Escaneie o QRCode para entrar à academia.
              </Text>

              <TouchableOpacity
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
                    // fontSize: 18,
                    color: COLORS.WHITE,
                  }}
                >
                  Ler QRCode
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: '40%',
                height: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={{
                  uri: 'https://i.imgur.com/tlfeMKB.png',
                }}
                style={{ width: 200, height: 200 }}
              />
            </View>
          </View>

          {/* gym features/products */}
          <View
            style={{
              marginTop: '10%',
            }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{}}
            >
              {productCard()}
              {productCard((bgColor = COLORS.BLUE_BUTTON))}
            </ScrollView>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  height: 35,
                  width: 150,
                  borderRadius: 20,
                  flexDirection: 'row',
                  padding: '2%',
                  margin: '2%',
                  backgroundColor: COLORS.BLUE_BUTTON,
                  marginTop: 10,
                  paddingHorizontal: '5%',
                  justifyContent: 'center',
                }}
              >
                <View
                  style={{
                    width: '100%',
                    // height: 150,
                    flexDirection: 'row',
                    gap: 5,
                    // justifyContent: 'space-around',
                    // justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.Poppins_Bold,
                      fontSize: 14,
                      color: COLORS.BLACK,
                    }}
                  >
                    Dia:
                  </Text>

                  <Text
                    style={{
                      fontFamily: FONTS.Poppins_Bold,
                      fontSize: 14,
                      color: COLORS.BLACK,
                    }}
                  >
                    {getFormattedDate()}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  height: 35,
                  width: 150,
                  borderRadius: 20,
                  flexDirection: 'row',
                  padding: '2%',
                  margin: '2%',
                  backgroundColor: COLORS.BLUE_BUTTON,
                  marginTop: 10,
                  paddingHorizontal: '5%',
                  justifyContent: 'center',
                }}
              >
                <View
                  style={{
                    width: '100%',
                    // height: 150,
                    flexDirection: 'row',
                    gap: 5,
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.Poppins_Bold,
                      fontSize: 14,
                      color: COLORS.BLACK,
                    }}
                  >
                    {getDayAtWeek()}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Info chart */}
          <View
            style={
              {
                // height: '100%',
              }
            }
          >
            {BarChartCard()}
          </View>
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
