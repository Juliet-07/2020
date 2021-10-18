import {StyleSheet} from 'react-native';
import { colors } from '../../config/colors';
import theme from '../../config/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: 145,
    height: 132,
  },
  profileicon: {
    width: '75%',
  },
  details: {
    fontSize:18,
    color:theme.grey
  },
  registeredKidsHolder: {
    padding: 5,
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#00000004',
    justifyContent: 'space-around',
  },
  text: {
    color: 'whitesmoke',
  },
  socialMediaIconView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  iconView: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});
