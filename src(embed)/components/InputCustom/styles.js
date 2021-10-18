import {StyleSheet} from 'react-native';
import {elevationShadowStyle} from '../../utils/elevationStyle';
export const styles = StyleSheet.create({
    inputContainer: {
      borderRadius: 3,
      borderBottomWidth: 0,
      paddingHorizontal: 10,
      // height: 48,
      // backgroundColor: 'red',
      ...elevationShadowStyle(3),
    }, 
    default: {
      backgroundColor: '#fff',
    ...elevationShadowStyle(3),
    },
    underline: {
      borderBottomWidth: 1,
      // backgroundColor: 'red',
    },
    errorMessage: {
      color: 'red',
      paddingBottom: 10,
      fontSize: 11,
    },
    container: {
      height: 42,
      // backgroundColor:'green',
      paddingHorizontal: 0,
      borderRadius: 3,
      // marginBottom: 8,
    },
  });