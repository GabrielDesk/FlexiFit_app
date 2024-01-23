import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Snackbar } from 'react-native-paper';
import { INITIAL_STATE } from '../../utils/useSnackBar';
import { COLORS } from '../../constants/Colors';
import { FONTS } from '../../constants/Fonts'; // Importa FONTS aquí

const { height, width } = Dimensions.get('window');
const SnackType = {
  SHOW_SNACKBAR_SUCCESS: 0,
  SHOW_SNACKBAR_ERROR: 1,
  SHOW_SNACKBAR_INFO: 2,
  DISMISS_SNACKBAR: 3,
};

const styles = StyleSheet.create({
  Container: {
    zIndex: 1,
    position: 'absolute',
    top: height * 0.52,
    right: 0,
    left: 0,
    bottom: 0,
    width,
  },
  SnackBarStyle: {
    borderWidth: 5,
    borderColor: COLORS.BRANCO_APP,
    zIndex: 10,
  },
  Text: {
    fontFamily: FONTS.Poppins_SemiBold,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  FullScreenTouchable: {
    backgroundColor: 'transparent',
    flex: 1,
  },
});

export default function SnackbarComponent({ type, snackbarMessage }) {
  const [Animation, setAnimation] = useState('fadeInUp');
  const [SnackBarType, setSnackBarType] = useState(type);
  const [SnackbarStates, setSnackbarStates] = useState({
    Visible: false,
    ContainerColor: COLORS.ROXO2_APP,
    TextColor: COLORS.BRANCO_APP,
    Message: snackbarMessage,
    Animation: Animation, // Agrega Animation aquí
  });

  useEffect(() => {
    return () => {
      switch (type) {
        case SnackType.SHOW_SNACKBAR_SUCCESS:
          setSnackbarStates({
            ...SnackbarStates,
            Visible: true,
            ContainerColor: COLORS.ROXO_APP,
            TextColor: COLORS.VERDEESCURO2_APP,
            Message: snackbarMessage,
          });
        case SnackType.SHOW_SNACKBAR_ERROR:
          setSnackbarStates({
            ...SnackbarStates,
            Visible: true,
            ContainerColor: COLORS.BRANCO_APP,
            TextColor: COLORS.VERMELHO_APP,
            Message: snackbarMessage,
          });
        case SnackType.SHOW_SNACKBAR_INFO:
          setSnackbarStates({
            ...SnackbarStates,
            Visible: true,
            ContainerColor: COLORS.ROXO_APP,
            TextColor: COLORS.BRANCO_APP,
            Message: snackbarMessage,
          });
        case SnackType.DISMISS_SNACKBAR:
          setSnackbarStates({
            ...SnackbarStates,
            Visible: INITIAL_STATE.Visible,
            Message: INITIAL_STATE.Message,
          });
        default:
          return SnackbarStates;
      }
    };
  }, []);

  return (
    <Modal
      transparent
      visible={SnackbarStates.Visible}
      animationType="fade"
      onRequestClose={() => setSnackBarType(3)}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={styles.FullScreenTouchable}
        onPress={() => setSnackBarType(3)}
      >
        <Animatable.View
          style={SnackbarStates.Visible ? styles.Container : {}}
          animation={SnackbarStates.Animation}
          duration={1000}
          onAnimationEnd={() => {
            if (SnackbarStates.Animation === 'fadeOutDown') {
              setAnimation('fadeInUp');
              setSnackBarType(3); // Actualiza el tipo de Snackbar aquí
            }
          }}
          useNativeDriver
        >
          <Snackbar
            visible={SnackbarStates.Visible}
            onDismiss={() => {
              setAnimation('fadeOutDown');
              setSnackBarType(3); // Actualiza el tipo de Snackbar aquí
            }}
            duration={3000}
            style={[
              styles.SnackBarStyle,
              {
                backgroundColor: SnackbarStates.ContainerColor,
                borderColor: SnackbarStates.TextColor,
              },
            ]}
          >
            <Text style={[styles.Text, { color: SnackbarStates.TextColor }]}>
              {SnackbarStates.Message}
            </Text>
          </Snackbar>
        </Animatable.View>
      </TouchableOpacity>
    </Modal>
  );
}
