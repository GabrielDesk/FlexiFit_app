import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
