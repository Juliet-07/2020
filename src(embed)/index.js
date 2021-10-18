/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {ThemeProvider} from 'react-native-elements';
import {ApolloProvider} from '@apollo/client';
import Route from './src/config/Routes';
import Client from './src/config/apollo'
import {colors} from './src/config/colors';

const theme = {
  colors,
};

const App = () => (
  <ApolloProvider client={Client}>
    <ThemeProvider theme={theme}>
      <Route />
    </ThemeProvider>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => App);