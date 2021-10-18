import {StyleSheet} from 'react-native';
import theme from '../../../config/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  userName: {
    lineHeight: 24,
    color: theme.grey,
  },
  card_child: {
    borderRadius: 55,
  },
  AddcardsContainer: {
    margin: 10,
    width: '90%',
    borderRadius: 1,
    alignItems: 'center',
    borderWidth: 4,
    padding: 40,
    borderColor: theme.grey,
    borderStyle: 'dashed',
  },
  AddNewChildText: {
    margin: 5,
    fontSize: 19,
    color: theme.grey,
  },
});
