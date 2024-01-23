import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '../../constants/Colors';
import { FONTS } from '../../constants/Fonts';

export const PrimaryButton = ({
  onPressPositive = () => {},
  Disabled = false,
  TextAnimation,
  Icon,
  TitleText,
  useNativeDriver,
  customStyle,
}) => (
  <TouchableOpacity
    disabled={Disabled}
    style={
      Disabled
        ? [styles.disabledButton, customStyle]
        : [styles.Button, customStyle]
    }
    onPress={() => onPressPositive()}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.text}>{TitleText}</Text>
      <MaterialCommunityIcons name={Icon} color={COLORS.BRANCO_APP} size={20} />
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.Poppins_Bold,
    color: COLORS.BRANCO_APP,
    fontSize: 16,
    marginRight: 10,
  },
  Button: {
    alignItems: 'center',
    backgroundColor: COLORS.ROXO_APP,
    marginHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 5,
  },
  disabledButton: {
    alignItems: 'center',
    backgroundColor: COLORS.CINZAINPUT_APP,
    marginHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 5,
    opacity: 1,
  },
});
