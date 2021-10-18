import {StyleSheet} from 'react-native';
import {ThemeConsumer} from 'styled-components';
import theme from '../../config/theme/index';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },

  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 90,
    height: 82,
  },
  textsContainer: {
    marginLeft: 65
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
  },
});
