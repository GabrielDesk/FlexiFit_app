import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
// import { TextInputMask } from 'react-native-masked-text';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../constants/Colors';
import { FONTS } from '../../constants/Fonts';
// import Tooltip from 'rne-modal-tooltip';
import { VectorIcon } from '../../utils/VectorIconsUtil';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Loading from '../DefaultLoading/index';
import PropTypes from 'prop-types';

const DEFAULT_TEXT_INPUT_ANIMATION = 'flipInY';
const DEFAULT_TEXT_INPUT_ANIMATION_DURATION = 1500;

const styles = StyleSheet.create({
  Container: {
    borderColor: COLORS.ROXO_APP,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '3%',
  },
  ModalButtonInfo: {
    resizeMode: 'stretch',
    width: 20,
    height: 20,
  },
  CPFInput: {
    borderBottomWidth: 0,
    marginBottom: 0,
    fontSize: 15,
    width: '100%',
    height: 50,
    fontFamily: FONTS.Montserrat_Medium,
  },
  Icon: {
    paddingHorizontal: 5,
  },
  TextInput: {
    color: COLORS.BRANCO_APP,
    flex: 1,
    fontFamily: FONTS.Montserrat_Medium,
    paddingVertical: '3%',
    paddingHorizontal: '3%',
  },
  TextInputDisabled: {
    color: COLORS.PRETO_APP,
    flex: 1,
    fontFamily: FONTS.Montserrat_Medium,
    paddingVertical: '3%',
    paddingHorizontal: '3%',
  },
});

const renderIcon = (
  type,
  IconName,
  IconColor = COLORS.ROXO_APP,
  IconSize = 24,
) => {
  switch (type) {
    case 1:
      return (
        <Animatable.View
          animation={DEFAULT_TEXT_INPUT_ANIMATION}
          duration={DEFAULT_TEXT_INPUT_ANIMATION_DURATION}
          useNativeDriver
        >
          <FontAwesome
            name={IconName}
            color={IconColor}
            size={IconSize}
            style={styles.Icon}
          />
        </Animatable.View>
      );

    case 2:
      return (
        <Animatable.View
          animation={DEFAULT_TEXT_INPUT_ANIMATION}
          duration={DEFAULT_TEXT_INPUT_ANIMATION_DURATION}
          useNativeDriver
        >
          <MaterialCommunityIcons
            name={IconName}
            color={IconColor}
            size={IconSize}
            style={styles.Icon}
          />
        </Animatable.View>
      );

    case 3:
      return (
        <Animatable.View
          animation={DEFAULT_TEXT_INPUT_ANIMATION}
          duration={DEFAULT_TEXT_INPUT_ANIMATION_DURATION}
          useNativeDriver
        >
          <Ionicons
            name={IconName}
            color={IconColor}
            size={IconSize}
            style={styles.Icon}
          />
        </Animatable.View>
      );
    case 4:
      return (
        <Animatable.View
          animation={DEFAULT_TEXT_INPUT_ANIMATION}
          duration={DEFAULT_TEXT_INPUT_ANIMATION_DURATION}
          useNativeDriver
        >
          <MaterialIcons
            name={IconName}
            color={IconColor}
            size={IconSize}
            style={styles.Icon}
          />
        </Animatable.View>
      );
    case 5:
      return (
        <Animatable.View
          animation={DEFAULT_TEXT_INPUT_ANIMATION}
          duration={DEFAULT_TEXT_INPUT_ANIMATION_DURATION}
          useNativeDriver
        >
          <FontAwesome5
            name={IconName}
            color={IconColor}
            size={IconSize}
            style={styles.Icon}
          />
        </Animatable.View>
      );

    default:
      return null;
  }
};

const DefaultTextInput = ({
  Key = null,
  IconName = 'user-o',
  IconType = 1,
  IconColor = COLORS.BRANCO_APP,
  Valid,
  PlaceHolder,
  Value,
  OnChangeFunction = (text) => {
    console.log(text);
  },
  onEndEditingFuction = () => null,
  OnFocusFunction = () => null,
  onBlurFunction = () => null,
  onRighIconClickFunction = () => null,
  RightIconName = '',
  RightIconType = 1,
  RightIconColor = COLORS.ROXO_APP,
  ShouldHaveRightIcon = false,
  ShoulBeMasked = false,
  ShouldHaveLoadingInput = false,
  ShoulBeCPF = false,
  MaskType = 'credit-card',
  MaskOptions = {},
  MaxLength = 100,
  KeyboardType = 'email-address',
  ShouldHaveTooltip = false,
  TooltipHeight = 100,
  TooltipWidth = 100,
  TooltipBackgroundColor = COLORS.BRANCO_APP,
  ToolTipPopover = {},
  CustomStyles = {},
  editable = true,
  secureTextEntry = false,
  CustomContainerStyles = {},
  IsCaretHidden = false,
}) => (
  <View style={[styles.Container, CustomContainerStyles]}>
    {renderIcon(IconType, IconName, IconColor)}

    {ShoulBeMasked && editable ? (
      <TextInputMask
        key={Key}
        placeholder={PlaceHolder}
        placeholderTextColor={COLORS.CINZA_APP}
        style={[styles.TextInput, CustomStyles]}
        type={MaskType}
        options={MaskOptions}
        value={Value}
        maxLength={MaxLength}
        onFocus={OnFocusFunction}
        onBlur={onBlurFunction}
        keyboardType={KeyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={(text) => {
          OnChangeFunction(text);
        }}
      />
    ) : (
      <TextInput
        key={Key}
        editable={editable}
        caretHidden={IsCaretHidden}
        placeholder={PlaceHolder}
        placeholderTextColor={COLORS.BRANCO_APP}
        style={[
          editable ? styles.TextInput : styles.TextInputDisabled,
          CustomStyles,
        ]}
        keyboardType={KeyboardType}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        value={Value}
        onFocus={OnFocusFunction}
        onBlur={onBlurFunction}
        maxLength={MaxLength}
        ref={(ref) =>
          ref &&
          ref.setNativeProps({ style: { fontFamily: FONTS.Poppins_Bold } })
        }
        secureTextEntry={secureTextEntry}
        onChangeText={(val) => OnChangeFunction(val)}
        onEndEditing={(e) => onEndEditingFuction(e.nativeEvent.text)}
      />
    )}

    {ShouldHaveTooltip && (
      <Tooltip
        width={TooltipWidth}
        height={TooltipHeight}
        backgroundColor={TooltipBackgroundColor}
        popover={ToolTipPopover}
      >
        {renderIcon(2, 'information-outline', COLORS.ROXO_APP, 20)}
      </Tooltip>
    )}

    {!ShouldHaveLoadingInput && !ShouldHaveRightIcon && Valid && (
      <Animatable.View animation="bounceIn">
        <Feather
          name="check-circle"
          color="green"
          size={20}
          style={{ paddingHorizontal: 5 }}
        />
      </Animatable.View>
    )}

    {!ShouldHaveLoadingInput && ShouldHaveRightIcon && (
      <TouchableOpacity
        onPress={() => {
          onRighIconClickFunction();
        }}
      >
        <Animatable.View animation="bounceIn">
          <VectorIcon
            type={RightIconType}
            IconName={RightIconName}
            IconColor={RightIconColor}
            IconSize={22}
          />
        </Animatable.View>
      </TouchableOpacity>
    )}

    {ShouldHaveLoadingInput && (
      <Animatable.View animation="bounceIn">
        <Loading />
      </Animatable.View>
    )}
  </View>
);

DefaultTextInput.propTypes = {
  OnChangeFunction: PropTypes.func,
};

DefaultTextInput.defaultProps = {
  OnChangeFunction: undefined,
};

export default DefaultTextInput;
