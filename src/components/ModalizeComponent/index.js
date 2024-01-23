import DoubleButtons from '../Button/DoubleButtons';
import { PrimaryButton } from '../Button/PrimaryButton';
import { SecondaryButton } from '../Button/SecondaryButton';
import DefaultEmptyMessage from '../DefaultEmptyMessage';
import Loading from '../DefaultLoading/index';
import { COLORS } from '../../constants/Colors';
import {
  MODALIZE_FOOTER_TYPE,
  MODALIZE_HEADER_TYPE,
} from '../../constants/modalize';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Modalize } from 'react-native-modalize';
import { TypeIcon, VectorIcon } from '../../utils/VectorIconsUtil';
import styles from './styles';

export const ModalizeComponent = ({
  showModal,
  typeHeader,
  typeFooter,
  children,
  modalHeight,
  snapPoint,
  titleTextHeader = '',
  ComponentModalStyle = null,
  onClosed = () => {},
  customHeader = () => {},
  customFooter = () => {},
  funcPrimaryButton = () => {},
  funcSecondaryButton = () => {},
  onBackButtonPress = undefined,
  TitleButtonText = '',
  IconSingleButton = 'check',
  LeftButtonText = 'Sim',
  RightButtonText = 'Não',
  withHandle = true,
  flatListProps = null,
  adjustToContentHeight = false,
  closeOnOverlayTap = true,
  panGestureEnabled = true,
  TitleAlertEmptyFlatList = '',
  MessageAlertEmptyFlatList = '',
  ButtonEditText = 'Editar',
  ButtonDeleteText = 'Excluir',
  PrimaryButtonIcon = 'circle-edit-outline',
  SecondaryButtonIcon = 'delete-circle-outline',
  ShouldDisableSingleButton = false,
  ShouldDisableEditButton = false,
  ShouldDisableDeleteButton = false,
  disableScrollIfPossible = false,
}) => {
  const modalizeRef = useRef(null);
  const [isEmptyList, setIsEmptyList] = useState(false);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  useEffect(() => {
    if (showModal) onOpen();
    else onClose();
  }, [showModal]);

  useEffect(() => {
    if (flatListProps?.data?.length <= 0) setIsEmptyList(true);
    else setIsEmptyList(false);
  }, [flatListProps]);

  const renderEmptyList = () => (
    <DefaultEmptyMessage
      TitleMessage={TitleAlertEmptyFlatList}
      Message={MessageAlertEmptyFlatList}
      ContainerStyle={{
        flex: 0,
        justifyContent: 'flex-start',
        marginVertical: '15%',
      }}
    />
  );

  const renderModalHeader = () => {
    switch (typeHeader) {
      // Custom Header
      case MODALIZE_HEADER_TYPE.CUSTOM:
        return customHeader();

      // Texto no Header (Titulo)
      case MODALIZE_HEADER_TYPE.TITLE_TEXT:
        return (
          <View style={styles.ModalHeaderContainer}>
            <Text style={styles.ModalHeaderText}>{titleTextHeader}</Text>
          </View>
        );

      // Botão Unico no Header
      case MODALIZE_HEADER_TYPE.SINGLE_BUTTON:
        return (
          <Animatable.View
            animation="slideInLeft"
            useNativeDriver
            style={styles.ButtonHeaderContainer}
          >
            <SecondaryButton
              useNativeDriver
              TextAnimation="fadeIn"
              TitleText={TitleButtonText}
              Icon={IconSingleButton}
              onPressPositive={() => {
                funcPrimaryButton();
              }}
            />
          </Animatable.View>
        );

      default:
        return null;
    }
  };

  const renderModalFooter = () => {
    switch (typeFooter) {
      // Custom Footer
      case MODALIZE_FOOTER_TYPE.CUSTOM:
        return customFooter();

      // Botões Editar / Excluir
      case MODALIZE_FOOTER_TYPE.BUTTON_EDIT_DELETE:
        return (
          <View style={styles.ButtonsContainer}>
            <Animatable.View animation="slideInLeft" useNativeDriver>
              <PrimaryButton
                useNativeDriver
                TextAnimation="fadeIn"
                TitleText={ButtonEditText}
                Icon={PrimaryButtonIcon}
                onPressPositive={() => funcPrimaryButton()}
                Disabled={ShouldDisableEditButton}
              />
            </Animatable.View>
            <Animatable.View
              animation="slideInRight"
              useNativeDriver
              style={{ marginTop: '3%' }}
            >
              <SecondaryButton
                useNativeDriver
                TextAnimation="fadeIn"
                TitleText={ButtonDeleteText}
                Icon={SecondaryButtonIcon}
                onPressPositive={() => funcSecondaryButton()}
                Disabled={ShouldDisableDeleteButton}
              />
            </Animatable.View>
          </View>
        );

      // Botões Duplos de Sim e Não
      case MODALIZE_FOOTER_TYPE.DOUBLE_BUTTON:
        return (
          <DoubleButtons
            LeftButtonText={LeftButtonText}
            RightButtonText={RightButtonText}
            onPressLeft={() => funcPrimaryButton()}
            onPressRight={() => funcSecondaryButton()}
            TitleText={TitleButtonText}
          />
        );

      // Botão Unico
      case MODALIZE_FOOTER_TYPE.SINGLE_BUTTON:
        return (
          <Animatable.View
            animation="slideInUp"
            useNativeDriver
            style={styles.ButtonsContainer}
          >
            <PrimaryButton
              useNativeDriver
              TextAnimation="fadeIn"
              TitleText={TitleButtonText}
              Icon={IconSingleButton}
              Disabled={ShouldDisableSingleButton}
              onPressPositive={funcPrimaryButton}
            />
          </Animatable.View>
        );

      // Loading da Modal ( Colocando nesse estado a modal não pode fechar )
      case MODALIZE_FOOTER_TYPE.LOADING:
        return (
          <Animatable.View
            animation="slideInUp"
            useNativeDriver
            style={styles.LoadingContainer}
          >
            <Loading color={COLORS.ROXO_APP} size="large" />
          </Animatable.View>
        );

      case MODALIZE_FOOTER_TYPE.SUCESS_ALERT:
        return (
          <Animatable.View
            animation="slideInUp"
            useNativeDriver
            style={styles.LoadingContainer}
          >
            <VectorIcon
              type={TypeIcon.MATERIAL_COMMUNITY_ICONS}
              IconName={'check'}
              IconSize={30}
              IconStyle={{ alignSelf: 'center', justifyContent: 'center' }}
            />
          </Animatable.View>
        );
      case MODALIZE_FOOTER_TYPE.ERROR_ALERT:
        return (
          <Animatable.View
            animation="slideInUp"
            useNativeDriver
            style={styles.LoadingContainer}
          >
            <VectorIcon
              type={TypeIcon.MATERIAL_COMMUNITY_ICONS}
              IconName={'alert-octagon'}
              IconSize={30}
              IconStyle={{ alignSelf: 'center', justifyContent: 'center' }}
            />
          </Animatable.View>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Modalize
        onBackButtonPress={onBackButtonPress ?? onClose}
        ref={modalizeRef}
        modalHeight={modalHeight}
        HeaderComponent={renderModalHeader}
        // FooterComponent={isEmptyList ? renderEmptyList : renderModalFooter}
        FooterComponent={renderModalFooter}
        modalStyle={[
          ComponentModalStyle ? ComponentModalStyle : styles.Modal,
          {
            borderWidth: flatListProps ? 2 : 0,
            borderColor: COLORS.BLACK,
          },
        ]}
        flatListProps={flatListProps}
        onClosed={onClosed}
        disableScrollIfPossible={disableScrollIfPossible}
        closeOnOverlayTap={
          !closeOnOverlayTap
            ? false
            : typeFooter !== MODALIZE_FOOTER_TYPE.LOADING || !closeOnOverlayTap
        }
        panGestureEnabled={
          !panGestureEnabled
            ? false
            : typeFooter !== MODALIZE_FOOTER_TYPE.LOADING || !panGestureEnabled
        }
        withHandle={
          !closeOnOverlayTap ||
          !panGestureEnabled ||
          typeFooter === MODALIZE_FOOTER_TYPE.LOADING
            ? false
            : withHandle
        }
        snapPoint={snapPoint}
        adjustToContentHeight={adjustToContentHeight}
      >
        {children}
      </Modalize>
    </>
  );
};
