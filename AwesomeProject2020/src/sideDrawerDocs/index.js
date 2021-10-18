import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

// navigation tools
import {NavigationContainer, Navigator} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// pages to be navigated
import FirstPage from './sideDrawer/firstPage';
import SecondPage from './sideDrawer/secondPage';
import ThirdPage from './sideDrawer/thirdPage';

// const { Navigator, Screen } = createStackNavigator();
// const { Navigator, Drawer} = createDrawerNavigator();

const Screen = createStackNavigator()
const Drawer = createDrawerNavigator()

//Structure for the navigation Drawer
const NavigationDrawerStructure = (props) => {

  //Props to open/close the drawer
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const firstScreenStack = ({navigation}) => {
  return (
    <Navigator initialRouteName="FirstPage">
      <Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'First Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Navigator>
  );
}

const secondScreenStack = ({navigation}) => {
  return (
    <Navigator
    initialRouteName='SecondPage'
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title
        }}
      />
      <Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }}
      />
    </Navigator>
  );
}

const Route = () => {
  return (
    <NavigationContainer>
      <Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}>
        <Screen
          name="FirstPage"
          options={{drawerLabel: 'First page Option'}}
          component={firstScreenStack}
        />
        <Screen
          name="SecondPage"
          options={{drawerLabel: 'Second page Option'}}
          component={secondScreenStack}
        />
      </Navigator>
    </NavigationContainer>
  );
}
export default Route