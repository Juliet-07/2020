import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ComponentsScreen from '../../../test-component';
const {Navigator, Screen} = createStackNavigator();

const index = () => (
  <Navigator>
    <Screen name="ComponentsScreen" component={ComponentsScreen}/>
  </Navigator>
);

export default index;