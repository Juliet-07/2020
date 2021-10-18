import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  text: {
    color: colors.grey,
    lineHeight: 19,
  },

  resendOtp: {
    color: colors.secondary,
    fontSize: 16,
    textAlign: 'center',
  },
});
