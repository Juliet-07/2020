import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();
import Signin from '../../../screens/Auth/Signin';
import Signup from '../../../screens/Auth/Signup';
import Validation from '../../../screens/Auth/VerificationScreen';
import RecoverPassword from '../../../screens/Auth/RecoverPassword';
import Screen1 from '../../../screens/AuxillaryScreens/screen1';
import Screen3 from '../../../screens/AuxillaryScreens/screen3';
import AsyncStorage from '@react-native-community/async-storage';
import AddChild from '../../../parent/Overview/AddChild';
import AddNewChild from '../../../parent/Overview/AddNewChild';
const index = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <Navigator headerMode="none" initialRouteName="Signup">
        <Screen name="Signin" component={Signin} />
        <Screen name="Signup" component={Signup} />
        <Screen name="Validation" component={Validation} />
        <Screen name="RecoverPassword" component={RecoverPassword} />
        <Screen name="Screen1" component={Screen1} />
        <Screen name="Screen3" component={Screen3} />
        <Screen name="AddNewChild" component={AddNewChild} />
        <Screen name="AddChild" component={AddChild} />

      </Navigator>
    );
  } else {
    return (
      <Navigator headerMode="none" initialRouteName="Screen3">
        <Screen name="Signin" component={Signin} />
        <Screen name="Signup" component={Signup} />
        <Screen name="Validation" component={Validation} />
        <Screen name="RecoverPassword" component={RecoverPassword} />
        <Screen name="Screen1" component={Screen1} />
        <Screen name="Screen3" component={Screen3} />
        <Screen name="AddNewChild" component={AddNewChild} />
        <Screen name="AddChild" component={AddChild} />

      </Navigator>
    );
  }
};

export default index;
