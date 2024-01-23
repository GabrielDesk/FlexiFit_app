import { Platform, Vibration } from 'react-native';
/*
Controle de vibrações dentro do app
*/
export function VibrarNaTrocaDeTela(duration) {
  if (Platform.OS === 'android') Vibration.vibrate(duration);
}

export default { VibrarNaTrocaDeTela };
