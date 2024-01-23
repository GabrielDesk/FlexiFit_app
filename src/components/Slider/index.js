import React, { useState } from 'react';
import { View, StyleSheet, PanResponder, Dimensions, Text } from 'react-native';
import { FONTS } from '../../constants/Fonts';
import { TypeIcon, VectorIcon } from '../../utils/VectorIconsUtil';
import { COLORS } from '../../constants/Colors';

const Slider = ({ percent }) => {
  const { width } = Dimensions.get('window');

  let SliderWidth = percent ? percent : 0;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      let newSliderWidth = (gestureState.moveX / width) * 100;
      newSliderWidth = Math.min(Math.max(0, newSliderWidth), 100); // Limitando entre 0 e 100
      SliderWidth = newSliderWidth;
    },
  });

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View style={[styles.sliderTrack, { width: `${SliderWidth}%` }]} />

      <View style={styles.sliderValueContainer}>
        <View style={styles.sliderTrackIconContainer}>
          <VectorIcon
            IconName="paint-roller"
            IconType={TypeIcon.FONT_AWESOME_5}
            IconColor={COLORS.WHITE}
            IconSize={55}
          />
        </View>

        <Text style={styles.sliderValueText}>{Math.round(SliderWidth)}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#262626',
    position: 'relative',
    overflow: 'hidden',
  },
  sliderTrack: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: '#632AED',
    borderRadius: 15,
  },
  sliderValueContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sliderValueText: {
    color: '#FFF',
    fontSize: 55,
    fontFamily: FONTS.Poppins_Bold,
  },
  sliderTrackIconContainer: {
    padding: '6%',
    flex: 1,
  },
});

export default Slider;
