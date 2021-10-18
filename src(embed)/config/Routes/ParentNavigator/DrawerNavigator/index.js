// PROPS FOR DRAWER ITEMS
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
// IMPORT ALL SCREENS FROM INSIDE DRAWER NAVIGATOR
import Overview from './Overview';
import Performance from './Performance';
import Settings from './Settings';
import Subscriptions from './Subscriptions';
import DrawerContent from './DrawerContent';
import {colors} from '../../../colors';

const Drawer = createDrawerNavigator();

const DrawerItems = [
  {name: 'Overview', component: Overview, icon: 'grid-outline'},
  {
    name: 'Performance',
    component: Performance,
    icon: 'information-circle-outline',
  },

  {name: 'Settings', component: Settings, icon: 'ios-settings-outline'},
  {name: 'Subscriptions', component: Subscriptions, icon: 'ios-book-outline'},
];

const index = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Overview"
      drawerContent={(props) => <DrawerContent {...props} />}>
      {DrawerItems.map((item, i) => (
        <Drawer.Screen
          key={i}
          name={item.name}
          component={item.component}
          options={{
            drawerIcon: ({color, size}) => (
              <Ionicons name={item.icon} size={23} color={colors.secondary} />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
export default index;
