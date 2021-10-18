import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();
import Profile from '../../../../../parent/profile';
import ChildsProfile from '../../../../../parent/childsProfile';
import ProfileSettings from '../../../../../parent/profileSettings';

const index = () => {
  return (
    <Navigator headerMode="none" initialRouteName="Profile">
      <Screen name="Profile" component={Profile} />
      <Screen name="ProfileSettings" component={ProfileSettings}/>
      <Screen name="ChildsProfile" component={ChildsProfile} />
    </Navigator>
  );
};
export default index;
