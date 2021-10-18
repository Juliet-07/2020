import {StyleSheet} from 'react-native';
import theme from '../../../config/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  subTitle: {
    color: theme.primary,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width:"100%",
  },
});
