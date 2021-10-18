import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../../App/Home/index';

const {Navigator, Screen} = createStackNavigator();

const index = () => (
  <NavigationContainer>
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
    </Navigator>
  </NavigationContainer>
);
export default index;
