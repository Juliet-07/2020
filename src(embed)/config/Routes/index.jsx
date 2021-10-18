import React, {useEffect, useMemo, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigator';
import LearnerNavigator from './LearnerNavigator';
import ParentNavigator from './ParentNavigator';
import ComponentsScreen from './ComponentsNavigator';
import SplashScreen from 'react-native-splash-screen';
import Loader from '../../components/Loader';
import {AuthContext} from '../../AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import ShowMessage from '../../components/showMessage';

const userType = 'learner';
const dera = async (dispatch) => {
  let userToken;
  userToken = null;
  try {
    userToken = await AsyncStorage.getItem('token');
    accountType = await AsyncStorage.getItem('accountType');
  } catch (e) {
    ShowMessage(type.ERROR, 'There was error');
  }
  dispatch({type: 'RETRIEVE_TOKEN', token: userToken, accountType});
};
const Route = () => {
  useEffect(() => {
    SplashScreen.hide();
    dera(dispatch);
  }, []);

  const initialState = {
    isLoading: true,
    userName: null,
    userToken: null,
    accountType: null,
  };

  const token = false;

  const authReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
          accountType: action.accountType,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
          accountType: action.accountType,
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
          // isLoading: false,
        };
      case 'VERIFICATION':
        return {
          ...prevState,
          isLoading: false,
          accountType: action.accountType,
          userToken: action.token,
        };
    }
  };

  // REDUCER
  const [authState, dispatch] = useReducer(authReducer, initialState);

  // AUTH-CONTEXT
  const authContext = useMemo(
    () => ({
      // signIn: async (userName, password) => {
      //   let userToken;
      //   userToken = null;
      //   if (userName === 'juliet' && password === 'juli3t') {
      //     try {
      //       userToken = 'token';
      //       await AsyncStorage.setItem('userToken', userToken);
      //     } catch (e) {
      //       console.log(e);
      //     }
      //   }
      //   dispatch({type: 'LOGIN', id: userName, token: userToken});
      // },
      signIn: async (token, accountType) => {
        try {
          await AsyncStorage.setItem('token', token);
          await AsyncStorage.setItem('accountType', accountType);
        } catch (e) {
          ShowMessage(type.ERROR, e.toString());
        }
        dispatch({type: 'LOGIN', token, accountType});
      },
      signUp: async (email) => {
        try {
          await AsyncStorage.setItem('verify', email);
        } catch (e) {
          ShowMessage(type.ERROR, e.toString());
        }
        dispatch({type: 'REGISTER', email});
      },
      signOut: async () => {
        try {
          // await AsyncStorage.removeItem('userToken');
          await AsyncStorage.clear();
        } catch (e) {
          ShowMessage(type.ERROR, 'OOPS!!!, there was an error');
        }
        dispatch({type: 'LOGOUT'});
      },
      verification: async (token) => {
        try {
          await AsyncStorage.setItem('token', token);
        } catch (e) {
          ShowMessage(type.ERROR, 'Error Occured');
        }
        dispatch({type: 'VERIFICATION', token, accountType});
      },
    }),
    [],
  );
  if (authState.isLoading) {
    return <Loader />;
  }
  console.log(authState);
  const check = (accountType) => {
    let user;
    if (accountType === 'parent') {
      return (user = <ParentNavigator />);
    } else {
      return (user = <AuthNavigation />);
    }
  };
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {authState.userToken ? (
          check(authState.accountType)
        ) : (
          <AuthNavigation />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default Route;
