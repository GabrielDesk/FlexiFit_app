import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Surface } from 'react-native-paper';
import styles from './styles';

export const CardContainer = ({
  children,
  customStyleContainer,
  onPress,
  activeOpacity = 0.7,
  disabled = false,
  withoutPress = false,
  animation = 'slideInLeft',
  useNativeDriver = true,
  animationDelay = 200,
  animationDuration = 500,
}) => (
  <View>
    {withoutPress ? (
      <Surface style={[styles.container, { ...customStyleContainer }]}>
        {children}
      </Surface>
    ) : (
      <TouchableOpacity
        activeOpacity={disabled ? 1 : activeOpacity}
        onPress={() => onPress()}
        disabled={disabled}
      >
        <Surface style={[styles.container, { ...customStyleContainer }]}>
          {children}
        </Surface>
      </TouchableOpacity>
    )}
  </View>
);
