import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop:50
    // backgroundColor:"#e9d9e9"
  },
  details: {
    color: colors.grey,
  },
  details1: {
    color: colors.grey,
    // fontSize: 18,
  },
  signup: {
    // fontSize: 18,
    color: colors.secondary,
  },
  iconsContainer: {
    backgroundColor: '#e9d9e9',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
});
