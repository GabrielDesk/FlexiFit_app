import React from 'react';

import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/Colors';
import PropTypes from 'prop-types';

export default function Separator() {
  onPressPositive = () => {
    this.props.onPressPositive();
  };

  const styles = StyleSheet.create({
    separator: {
      height: 1,
      backgroundColor: COLORS.CINZACLARO_APP,
      opacity: 0.2,
      // marginVertical: '3%',
    },
  });

  return <View style={styles.separator} />;
}

// Separator.propTypes = {
//   Color: PropTypes.string,
// };
