import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { FONTS } from '../../constants/Fonts';

const { height, width } = Dimensions.get('window'); // Dimensões.

export default StyleSheet.create({
  Modal: {
    backgroundColor: COLORS.BRANCO_APP,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  ModalHeaderContainer: {
    marginHorizontal: '2%',
    justifyContent: 'center',
    marginVertical: '5%',
  },
  ModalHeaderText: {
    fontFamily: FONTS.Poppins_SemiBold,
    fontSize: 17,
    color: COLORS.ROXO_APP,
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  ButtonsContainer: {
    marginBottom: '5%',
  },
  ButtonContainer: {
    backgroundColor: COLORS.ROXO_APP,
    flexDirection: 'row',
    paddingHorizontal: '15%',
    // , marginVertical: '10%'
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  ButtonText: {
    fontFamily: FONTS.Montserrat_Bold,
    fontSize: 17,
    color: COLORS.BRANCO_APP,
  },
  floating: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.ROXO_APP,
  },
  title: {
    fontFamily: FONTS.Montserrat_Bold,
    fontSize: 9,
    maxWidth: '50%',
    color: COLORS.CINZACLARO_APP,
  },
  card: {
    flexDirection: 'row',
    paddingVertical: 10,
    maxWidth: '95%',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: '5%',
    shadowColor: COLORS.PRETO_APP,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 1.5,
  },
  cardContent: {
    marginLeft: '5%',
    flexDirection: 'row',
  },
  list: {
    paddingHorizontal: '5%',
  },
  AddressText: {
    fontFamily: FONTS.Montserrat_Bold,
    fontSize: 10,
    maxWidth: '75%',
    color: COLORS.PRETO_APP,
  },
  ButtonView: {
    marginBottom: '0%',
    paddingTop: '5%',
  },
  TouchableOpacityOptions: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '5%',
  },
  OptionsIconContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: '5%',
  },
  TextContainer: {
    alignItems: 'flex-start',
    minWidth: '75%',
  },
  PinContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoadingContainer: {
    marginBottom: '10%',
  },
  ButtonHeaderContainer: {
    marginTop: '5%',
  },
});
