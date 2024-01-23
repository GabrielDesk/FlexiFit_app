import { COLORS } from '../../constants/Colors';
import { FONTS } from '../../constants/Fonts';
import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

const DefaultContainer = {
  flex: 1,
  justifyContent: 'center',
  marginBottom: '10%',
  marginHorizontal: '10%',
  alignSelf: 'center',
};

const DefaultTitleMessage = {
  marginVertical: '5%',
  fontFamily: FONTS.Montserrat_Black,
  fontSize: 16,
  textAlign: 'center',
};

const styles = StyleSheet.create({
  Container: {
    ...DefaultContainer,
    height: height * 0.8,
  },
  ContainerHorizontal: {
    ...DefaultContainer,
  },
  TitleMessage: {
    ...DefaultTitleMessage,
    color: COLORS.PRETO_APP,
  },
  TitleMessageHorizontal: {
    ...DefaultTitleMessage,
    color: COLORS.ROXO_APP,
  },
  Message: {
    fontFamily: FONTS.Montserrat_Bold,
    fontSize: 12,
    color: COLORS.CINZACLARO_APP,
    textAlign: 'center',
  },
  Image: {
    height: height * 0.1,
    width: width * 0.5,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default styles;
