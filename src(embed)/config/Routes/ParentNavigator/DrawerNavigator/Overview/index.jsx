import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();
import AddChild from '../../../../../parent/Overview/AddChild';
import AddNewChild from '../../../../../parent/Overview/AddNewChild';
import { Header } from 'react-native/Libraries/NewAppScreen';
import _Header from "../../../../../components/Header";

const index = () => {
  return (
    <Navigator headerMode="none" initialRouteName="AddChild">
      <Screen name="AddChild" component={AddChild}/>
      <Screen name="_Header" component={_Header}/>
      <Screen name="AddNewChild" component={AddNewChild}/>
    </Navigator>
  );
};
export default index;
