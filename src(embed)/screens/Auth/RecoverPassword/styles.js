import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
export const styles = StyleSheet.create({
  container:{
    flex:1,
    width:"100%",
    marginTop:50
    // backgroundColor:"red"
  },
  details: {
    color: colors.primary,
    fontSize:18,
  },
  headerMessage:{
    fontSize:16,
    color:colors.grey,
    marginTop:15
    
  }
});
