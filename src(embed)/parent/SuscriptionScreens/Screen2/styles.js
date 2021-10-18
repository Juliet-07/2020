import {StyleSheet} from 'react-native';
import theme from '../../../config/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  subTitleContainer: {
    height: 80,
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  subTitle: {
    color: theme.primary,
    fontWeight: 'bold',
  },
  iconsContainer: {
    backgroundColor: '#e9d9e9',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  Title: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 10,
    alignSelf: 'center',
  },
  button: {
    alignItems: 'flex-end',
    width: '87%',
    justifyContent: 'center',
    height: 120,
  },
});
