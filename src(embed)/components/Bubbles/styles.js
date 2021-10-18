import {StyleSheet} from 'react-native';

export const styles = (props) =>
  StyleSheet.create({
    bubble: {
      position: 'relative',
      zIndex: 2,
      position: 'relative',
      zIndex: 2,
    },
    beforeBubbles: {
      position: 'absolute',
      zIndex: -1,
      top: props.up ? props.up : 20,
      left: 0,
      padding: props.thickness ? props.thickness[0] : 50,
      backgroundColor: 'orange',
      borderRadius: 100,
    },
    afterBubbles: {
      position: 'absolute',
      zIndex: -1,
      bottom: props.right ? props.right : 20,
      right: -50,

      padding: props.thickness ? props.thickness[1] : 0,
      backgroundColor: props.backgroundColor ? backgroundColor : 'pink',
      borderRadius: 100,
    },

    child: {
      position: 'relative',
      zIndex: 2,
    },

    beforeChild: {
      position: 'absolute',
      zIndex: -1,
      left: 0,
      margin: 'auto',
      bottom: props.btm ? props.btm : 0,
      padding: props.thickness ? props.thickness[2] : 20,
      right: props.btm ? props.btm : 0,
      width: 0,
      height: 0,
      // top: 0,

      backgroundColor: 'green',
      borderRadius: 100,
    },
    afterChild: {
      position: 'absolute',
      zIndex: -1,
      bottom: props.down ? props.down : 0,
      left: 0,

      padding: props.thickness ? props.thickness[3] : 0,
      backgroundColor: 'grey',
      borderRadius: 100,
    },
  });
