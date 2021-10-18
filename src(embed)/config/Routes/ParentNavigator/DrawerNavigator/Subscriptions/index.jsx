import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
const {Navigator, Screen} = createStackNavigator()
import Screen1 from '../../../../../parent/SuscriptionScreens/Screen1'
import Screen2 from '../../../../../parent/SuscriptionScreens/Screen2'
const index = () =>{
    return(
        <Navigator headerMode='none' initialRouteName='Screen1'>
            <Screen name='Screen1' component={Screen1}/>
            <Screen name='Screen2' component={Screen2}/>
        </Navigator>
    )
}
export default index