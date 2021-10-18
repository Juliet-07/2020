import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal:20,
   
  },
  header: {
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    margin: 20,
  },
  button: {
    flex: 1,
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 25,
  },
  footerContent: {
    color: '#00000080',
    fontSize: 16,
    marginRight: 5,
  },
});
