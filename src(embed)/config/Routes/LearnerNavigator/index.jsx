import React from 'react' 
import {createStackNavigator} from '@react-navigation/stack';
// import Screens
import Overview from '../../../learner/screens/overView';
import Performance from '../../../learner/screens/performance';
import ClassRoom from '../../../learner/screens/classroom';
import TestKnowledge from '../../../learner/screens/testKnowledge';
import Settings from '../../../learner/screens/settings'; 
const {Navigator, Screen} = createStackNavigator()

 
const index = () => {
  return (
    <Navigator headerMode="none" initialRouteName="Overview">
      <Screen name="Overview" component={Overview}/>
      <Screen name="Performance" component={Performance}/>
      <Screen name="ClassRoom" component={ClassRoom}/>
      <Screen name="TestKnowledge" component={TestKnowledge}/>
      <Screen name="Settings" component={Settings}/>
    </Navigator>
  )
}

export default index;
 
