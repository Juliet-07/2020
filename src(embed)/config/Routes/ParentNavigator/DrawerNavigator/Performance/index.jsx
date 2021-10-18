import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../../../../components/Header'

const index = () => {
  return (
    <View style={{flex:1, width:'100%', marginTop:20, paddingHorizontal:20}}>
      <Header burgerMenu headerText="Performance" profileIcon />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>#EndSARS</Text>
      </View>
    </View>
  );
};
export default index;
