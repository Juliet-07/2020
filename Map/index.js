import React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
};

const NotificationsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

const {Navigator, Drawer} = createDrawerNavigator();
export const SideDrawer = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Drawer name="Home" component={HomeScreen} />
        <Drawer name="Notifications" component={NotificationsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

// import React from "react"
// import {View, Button} from "react-native"
// import StyledTouchableHighlight from "./styles"
// const Styling = () =>{
//     return(
//         <View>
//             <StyledTouchableHighlight>
//                 <Button title="TEST"/>
//             </StyledTouchableHighlight>
//         </View>
//     )
// }
// export default StyledComponent
