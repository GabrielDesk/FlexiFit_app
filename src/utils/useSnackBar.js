import { COLORS } from '../constants/Colors';

// INITIAL STATE
export const INITIAL_STATE = {
  Visible: false,
  ContainerColor: null,
  TextColor: null,
  Message: null,
};

import SnackbarComponent from '../components/Snackbar/index';

// Esta função exibirá o Snackbar com base no tipo e na mensagem fornecidos.
export function useSnackbar(type, message) {
  console.log('showSnackbar called with type:', type, 'and message:', message);

  //   SnackbarComponent(type, message);

  return <SnackbarComponent type={type} snackbarMessage={message} />;
}

// Defina tipos de Snackbar como constantes para facilitar o uso.
export const SNACKBAR_TYPES = {
  SUCCESS: 0,
  ERROR: 1,
  INFO: 2,
  DISMISS: 3,
};
