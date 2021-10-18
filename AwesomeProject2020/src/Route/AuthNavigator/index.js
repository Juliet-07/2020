import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();
import Signup from "../../Authscreens/Signup"
import Signin from "../../Authscreens/Signin";


const index = () => {
  return (
    <Navigator headerMode="none" initialRouteName="Signin" >
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
    </Navigator>
  );
};
export default index;