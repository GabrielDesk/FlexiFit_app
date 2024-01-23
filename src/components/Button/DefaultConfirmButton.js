import React from 'react';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Dimensions,
} from 'react-native';

import { COLORS } from '../../constants/Colors';

const { height, width } = Dimensions.get('window');

export default class DefaultConfirmButton extends React.Component {
  onPressPositive = () => {
    this.props.onPressPositive();
  };

  insidebutton = () => {
    if (this.props.isLoading) {
      return (
        <View>
          <ActivityIndicator size="small" color="#fff" />
        </View>
      );
    }
    if (this.props.isError) {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.TextErrorStyle}>{this.props.TextError}</Text>
          <MaterialCommunityIcons
            name="alert-circle-outline"
            color={COLORS.PRETO_APP}
            size={20}
          />
        </View>
      );
    }

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.text}>{this.props.TitleText}</Text>
        <MaterialCommunityIcons
          name={this.props.Icon}
          color={COLORS.BRANCO_APP}
          size={20}
        />
      </View>
    );
  };

  render() {
    return (
      <TouchableOpacity
        disabled={this.props.isLoading ? true : this.props.Disabled}
        style={
          this.props.Disabled
            ? [styles.disabledButton, this.props.ContainerStyle]
            : this.props.isError
            ? [styles.ButtonError, this.props.ContainerStyle]
            : [styles.Button, this.props.ContainerStyle]
        }
        onPress={this.onPressPositive}
      >
        <View
          animation={this.props.TextAnimation}
          useNativeDriver={this.props.useNativeDriver ?? true}
        >
          {this.insidebutton()}
        </View>
      </TouchableOpacity>
    );
  }
}

DefaultConfirmButton.propTypes = {
  TitleText: PropTypes.string,
  Icon: PropTypes.string,
  TextAnimation: PropTypes.string,
  ContainerStyle: PropTypes.string,
  useNativeDriver: PropTypes.bool,
  Disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  TextError: PropTypes.string,
  onPressPositive: PropTypes.func,
};

const styles = StyleSheet.create({
  text: {
    // fontFamily: FONTS.Montserrat_Bold,
    color: COLORS.BRANCO_APP,
    fontSize: 20,
    marginRight: 10,
  },
  TextErrorStyle: {
    // fontFamily: FONTS.Montserrat_Bold,
    color: COLORS.PRETO_APP,
    fontSize: 15,
    marginRight: 10,
    textAlign: 'center',
    padding: '5%',
  },
  Button: {
    alignSelf: 'center',
    backgroundColor: COLORS.ROXO_APP,
    paddingVertical: '2%',
    borderRadius: 5,
    height: height * 0.06,
    width: width * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  disabledButton: {
    alignSelf: 'center',
    backgroundColor: COLORS.CINZAINPUT_APP,
    paddingVertical: '2%',
    borderRadius: 5,
    height: height * 0.06,
    width: width * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: 1,
  },
  ButtonError: {
    alignSelf: 'center',
    backgroundColor: 'red',
    paddingVertical: '2%',
    borderRadius: 5,
    height: height * 0.06,
    width: width * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
