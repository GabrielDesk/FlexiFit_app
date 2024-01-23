import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { VectorIcon } from '../../utils/VectorIconsUtil';
import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../constants/Colors';

const CustomCard = ({
  IconName,
  IconType,
  Title,
  Subtitle,
  ActionButtonFunc = () => null,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconContainer}>
        <VectorIcon
          IconName={IconName} // Substitua pelo nome do ícone desejado
          IconType={IconType} // Substitua pelo tipo do ícone (ex.: FONT_AWESOME)
          IconColor="#632AED"
          IconSize={20}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2%',
          width: '100%',
        }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>{Title}</Text>
        </View>
        <Text style={styles.subTitleText}>{Subtitle}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => ActionButtonFunc()}
        >
          <Text style={styles.buttonText}>Ver Mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: '90%',
    padding: '4%',
    width: 130,
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#262626',
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: '5%',
  },
  textContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  boldText: {
    fontSize: 13,
    fontFamily: FONTS.Poppins_SemiBold,
    color: COLORS.GRAY,
  },
  buttonContainer: {
    padding: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.AMARELO_APP,
  },
  button: {
    backgroundColor: '#632AED',
    padding: '2%',
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    padding: '4%',
    fontSize: 16,
    fontFamily: FONTS.Poppins_Medium,
    justifyContent: 'center',
    color: 'white',
  },
  subTitleContainer: {
    justifyContent: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  subTitleText: {
    marginVertical: '6%',
    fontSize: 9.5,
    lineHeight: 12,
    fontFamily: FONTS.Poppins_Medium,
    justifyContent: 'center',
    textAlign: 'left',
    color: COLORS.WHITE_SMOKE,
  },
  bottomContainer: {
    flexDirection: 'column',
    flex: 1,
    height: '70%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: '5%',
    paddingBottom: '5%',
  },
});

export default CustomCard;
