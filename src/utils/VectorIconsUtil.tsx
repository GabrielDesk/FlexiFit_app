import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { COLORS } from '../constants/Colors';

export enum TypeIcon {
  FONT_AWESOME = 1,
  MATERIAL_COMMUNITY_ICONS = 2,
  IONICONS = 3,
  MATERIAL_ICONS = 4,
  FEATHER = 5,
  FONT_AWESOME_5 = 6,
  ENTYPO = 7,
  SIMPLE_LINE_ICONS = 8,
  OCTICONS = 9,
}

interface VectorIconProps {
  IconType: TypeIcon;
  IconName: string;
  IconColor?: string;
  IconSize?: number;
  IconStyle?: any;
}

export function VectorIcon({
  IconType = 1,
  IconName,
  IconColor = COLORS.ROXO_APP,
  IconSize = 20,
  IconStyle = { paddingHorizontal: 5 },
}: VectorIconProps) {
  switch (IconType) {
    case TypeIcon.FONT_AWESOME:
      return (
        <FontAwesome
          name={IconName}
          color={IconColor}
          size={IconSize}
          style={IconStyle}
        />
      );

    case TypeIcon.MATERIAL_COMMUNITY_ICONS:
      return (
        <MaterialCommunityIcons
          name={IconName}
          color={IconColor}
          size={IconSize}
          style={IconStyle}
        />
      );

    case TypeIcon.IONICONS:
      return (
        <Ionicons
          name={IconName}
          color={IconColor}
          size={IconSize}
          style={IconStyle}
        />
      );
    case TypeIcon.MATERIAL_ICONS:
      return (
        <MaterialIcons
          name={IconName}
          color={IconColor}
          size={IconSize}
          style={IconStyle}
        />
      );
    case TypeIcon.FEATHER:
      return (
        <Feather
          name={IconName}
          color={IconColor}
          size={IconSize}
          style={IconStyle}
        />
      );
    case TypeIcon.FONT_AWESOME_5:
      return (
        <FontAwesome5
          name={IconName}
          color={IconColor}
          size={IconSize}
          style={IconStyle}
        />
      );
    case TypeIcon.ENTYPO:
      return (
        <Entypo
          name={IconName}
          color={IconColor}
          size={IconSize}
          style={IconStyle}
        />
      );
    case TypeIcon.SIMPLE_LINE_ICONS:
      return (
        <SimpleLineIcons
          name={IconName}
          color={IconColor}
          size={IconSize}
          style={IconStyle}
        />
      );
    case TypeIcon.OCTICONS:
      return (
        <Octicons
          name={IconName}
          color={IconColor}
          size={IconSize}
          style={IconStyle}
        />
      );
    default:
      return (
        <Feather
          name={IconName}
          color={IconColor}
          size={IconSize}
          style={IconStyle}
        />
      );
  }
}
