import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import { COLORS } from '../../constants/Colors';
import { FONTS } from '../../constants/Fonts';

const { height, width } = Dimensions.get('window');

const DoubleButtons = ({
  onPressLeft,
  onPressRight,
  TitleText,
  LeftButtonText = 'Sim',
  RightButtonText = 'Não',
  useNativeDriver = true,
  TextAnimationTitle = 'fadeIn',
  DelayAnimationTitle = 50,
  TextAnimationLeftButton = 'slideInLeft',
  TextAnimationRightButton = 'slideInRight',
  ButtonMaxWidth = width * 0.4,
  ButtonMinWidth = width * 0.3,
}) => {
  {
    return (
      <View>
        <Text style={styles.TitleText}>{TitleText}</Text>

        <View style={styles.container}>
          <TouchableOpacity onPress={onPressLeft}>
            <View>
              <View
                style={[
                  styles.Button,
                  { maxWidth: ButtonMaxWidth, minWidth: ButtonMinWidth },
                ]}
              >
                <Text numberOfLines={1} style={styles.text}>
                  {LeftButtonText}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressRight}>
            <View>
              <View
                style={[
                  styles.Button,
                  { maxWidth: ButtonMaxWidth, minWidth: ButtonMinWidth },
                ]}
              >
                <Text numberOfLines={1} style={styles.text}>
                  {RightButtonText}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

DoubleButtons.propTypes = {
  TitleText: PropTypes.string,
  Icon: PropTypes.string,
  TextAnimation: PropTypes.string,
  useNativeDriver: PropTypes.bool,
  Disabled: PropTypes.bool,
  onPressPositive: PropTypes.func,
};

export default DoubleButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '4%',
    marginTop: '2%',
  },
  text: {
    fontFamily: FONTS.Poppins_Bold,
    color: COLORS.BRANCO_APP,
    fontSize: 16,
    paddingHorizontal: '5%',
  },
  TitleText: {
    fontFamily: FONTS.Poppins_Bold,
    color: COLORS.VERMELHO_APP,
    fontSize: 14,
    alignSelf: 'center',
    marginVertical: '3%',
    textAlign: 'center',
  },
  Button: {
    height: height * 0.045,
    maxHeight: height * 0.045,
    minHeight: height * 0.045,
    backgroundColor: COLORS.ROXO_APP,
    justifyContent: 'center',
    alignItems: 'center',
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
