import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import moreInfo from '../moreInfo';
import activities from '../activities';

const Tab = createMaterialTopTabNavigator();

const index = () => {
  return (
    <Tab.Navigator
      initialRouteName="moreInfo"
      tabBarOptions={{
        activeTintColor: '#1976D2',
        labelStyle: {fontSize: 14},
        inactiveTintColor: '#000000',
      }}>
      <Tab.Screen name="moreInfo" component={moreInfo} />
      <Tab.Screen name="activities" component={activities} />
    </Tab.Navigator>
  );
};

export default index;
