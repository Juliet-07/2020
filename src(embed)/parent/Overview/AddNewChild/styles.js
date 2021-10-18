import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors'
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff9',
  },

  mainBody: {
    marginTop: 25,
  },
  iconsContainer: {
    width: '56%',
    justifyContent: 'flex-start',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginVertical: 5,
  },
  pickerContainer:{
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey
    
  }
});
