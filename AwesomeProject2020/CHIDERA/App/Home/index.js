import React from 'react';
import {View} from 'react-native';
import Header from '../../components';
import Tab from './TabRoute';
const index = () => {
  return (
    <View style={{flex:1}}>
      <Header />
      <View style={{flex:2}}>
        <Tab />
      </View>
    </View>
  );
};
export default index;
