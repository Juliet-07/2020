import {StyleSheet} from 'react-native';
import theme from '../../../config/theme/index';

export const styles = (props) =>
  StyleSheet.create({
    card: {
      backgroundColor: props.backgroundColor
        ? backgroundColor
        : theme.background,
      height: props.height ? height : 145,
      width: props.width ? props.width : '37%',
      alignSelf: props.alignSelf ? alignSelf : 'center',
      elevation: props.elevation ? props.elevation : 5,
      borderRadius: props.borderRadius ? props.borderRadius : 5,
    },
    cardContent: {
      alignItems: 'center',
      justifyContent:'center',
      // backgroundColor:"red",
      height:"100%"
    },
    image:  { 
    backgroundColor: 'green',
    width: 140,
    height: 120,
    marginTop:10,
    resizeMode:"contain",
    alignSelf:"center"
  },
  });
