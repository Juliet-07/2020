import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerContent from './DrawerNavigator';
// import AddChild from '../../../parent/Overview/AddChild';
// import AddNewChild from '../../../parent/Overview/AddNewChild';


const {Screen, Navigator} = createStackNavigator();

const index = () => {
  return (
    <Navigator headerMode='none'>
      <Screen name='DrawerContent' component={DrawerContent} />
      {/* <Screen name='AddNewChild' component={AddNewChild} />
      <Screen name='AddChild' component={AddChild} /> */}
    </Navigator>
  );
};
export default index;

// general screens shared by all components
