import {StyleSheet} from 'react-native';
import theme from '../../config/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: theme.background,
  },
  imgContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: theme.largeFontSize,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: theme.standardFontSize,
    textAlign: 'center',
    color: '#00000080',
    marginTop: 30,
    lineHeight: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 150,
    backgroundColor: theme.primary,
  },
  dotContainer: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  privacy: {
    alignSelf: 'center',
  },
});
