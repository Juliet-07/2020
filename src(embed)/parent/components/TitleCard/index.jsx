import React, {useState} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import theme from '../../../config/theme';
import image from '../../assets/image.png';
import image2 from '../../assets/image2.png';

const index = ({children, ...props}) => {
  return (
    <TouchableOpacity style={styles(props).card}>
      <View style={styles(props).cardContent}>{children}</View>
    </TouchableOpacity>
  );
};
export default index;
