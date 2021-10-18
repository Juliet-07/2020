// AUTHENTICATION HAPPENS HERE
import React, {useState, useEffect, useMemo, useReducer} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import {AuthContext} from '../AuthContext';
import AsyncStorage from '@react-native-community/async-storage';

const Route = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  // FOR SETTING UP THE USEREDUCER FUNCTION
  // (loginReducer is the state, dispatch is executing the action stated in loginReducer)
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (userName, password) => {
        // setIsLoading(false);
        // setUserToken('thanks for signing in');
        let userToken;
        userToken = null;
        if (userName === 'juliet' && password === 'pass') {
          try {
            userToken = 'token';
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log(e);
          }
        }
        console.log('user token:', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('thanks for signing up');
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'REGISTER', token: userToken});
    }, 1000);
  }, []);
  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default Route;

// {isLoggedIn?<AppNavigator/>:<AuthNavigator/>}

// FOR SIGN OUT
// IN THE DRAWER CONTENT WRITE THE FOLLOWING CODE
// import Authcontext, const {signOut} = useContext(AuthContext), in the button, pass in signout fxn