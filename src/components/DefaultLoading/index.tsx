import React from 'react';

import {
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
  ColorValue,
} from 'react-native';
import { COLORS } from '../../constants/Colors';

const styles = StyleSheet.create({
  Loading: {
    marginTop: '5%',
    alignSelf: 'center',
  },
});

type Props = {
  active: boolean;
  Color?: ColorValue;
  Styles?: StyleProp<ViewStyle>;
  size?: number | 'small' | 'large';
};

const Loading = ({ active = true, Color, Styles, size }: Props) => (
  <>
    {active && (
      <ActivityIndicator
        color={Color || COLORS.ROXO_APP}
        style={Styles || styles.Loading}
        size={size || 'small'}
      />
    )}
  </>
);

export default Loading;
