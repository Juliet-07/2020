import {StyleSheet} from 'react-native';

export const styles = (props) =>
StyleSheet.create({
  main: {
    width: props.width ? props.width : 'auto',
      height: props.height ? props.height : 'auto',
      marginTop: props.marginTop ? props.marginTop : 20,
      marginLeft: props.marginLeft ? props.marginLeft : 0,
      flexDirection: props.flexDir ? props.flexDir : 'row',
      marginRight: props.marginRight ? props.marginRight : 0,
      borderRadius: props.borderRadius ? props.borderRadius : 0,
      alignItems: props.alignItems ? props.alignItems : 'center',
      marginBottom: props.marginBottom ? props.marginBottom : 20,
      backgroundColor: props.bgColor ? props.bgColor : 'transparent',
      justifyContent: props.justifyContent ? props.justifyContent : 'center',
    },
  });
