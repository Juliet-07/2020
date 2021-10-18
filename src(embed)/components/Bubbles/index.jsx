import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const Index = ({
  up,
  down,
  btm,
  right,
  thickness,
  color,
  children,
  ...props
}) => {
  console.log(
    up,
    'up',
    down,
    'down',
    btm,
    'btm',
    right,
    'right',
    thickness[2],
    'thickness',
  );
  return (
    <View
      style={styles(props).bubble}
      up={up}
      right={right}
      btm={btm}
      down={down}
      thickness={thickness}
      color={color}>
      <View style={styles(props).beforeBubbles} />

      <View style={styles(props).child}>
        <View
          style={styles(props).beforeChild}
          up={up}
          right={right}
          btm={btm}
          down={down}
          thickness={thickness}
          color={color}
        />
        {children}
        <View style={styles(props).afterChild} />
      </View>

      <View style={styles(props).afterBubbles} />
    </View>
  );
};

export default Index;
