import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors'
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff9',
  },
  arrow: {
    fontSize: 30,
  },
  mainBody: {
    marginTop: 25,
  },
  pickerContainer:{
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey
  },
  textArea:{
    // backgroundColor:'red',
    textAlignVertical: 'top',
    borderBottomWidth: 1,
    borderBottomColor:'grey',
    fontSize: 16,
  }
});
