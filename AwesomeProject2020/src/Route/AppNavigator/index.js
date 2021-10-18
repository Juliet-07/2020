import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();
import Home from '../../App/Home/index';

const index = () => {
  return (
    <Navigator headerMode="none" initialRouteName="Home">
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
export default index;
