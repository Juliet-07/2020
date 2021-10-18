import React from 'react';
import {View} from 'react-native';
import {styles} from './flexView.styles';

const FlexView = ({alignItems, children, ...props}) => {
  return <View style={styles(props).main}>{children}</View>;
};

export default FlexView;
