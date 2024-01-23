import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { COLORS } from '../../constants/Colors';
import styles from './styles';

const { height, width } = Dimensions.get('window');

const IJOB_ICON = 'http://ijobtech.com/images/ijoblogo09.png';

export default function DefaultEmptyMessage({
  TitleMessage,
  Message,
  StyleTitleMessage,
  StyleMessage,
  ContainerStyle,
  ListHorizontal = false,
  CustomImage,
  ImageLocal = false,
  StyleImage,
}) {
  return ListHorizontal ? (
    <View style={[styles.ContainerHorizontal, { ...ContainerStyle }]}>
      <Animatable.Text
        useNativeDriver
        animation="slideInLeft"
        style={[styles.TitleMessageHorizontal, { ...StyleTitleMessage }]}
      >
        {TitleMessage}
      </Animatable.Text>
      <Animatable.Text
        useNativeDriver
        animation="slideInRight"
        style={[styles.Message, { ...StyleMessage }]}
      >
        {Message}
      </Animatable.Text>
    </View>
  ) : (
    <View style={[styles.Container, { ...ContainerStyle }]}>
      <Animatable.Image
        useNativeDriver
        animation="zoomIn"
        source={ImageLocal ? CustomImage : { uri: CustomImage ?? IJOB_ICON }}
        style={[styles.Image, { ...StyleImage }]}
      />
      <Animatable.Text
        useNativeDriver
        animation="slideInLeft"
        style={[styles.TitleMessage, { ...StyleTitleMessage }]}
      >
        {TitleMessage}
      </Animatable.Text>
      <Animatable.Text
        useNativeDriver
        animation="slideInRight"
        style={[styles.Message, { ...StyleMessage }]}
      >
        {Message}
      </Animatable.Text>
    </View>
  );
}
