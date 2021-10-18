import React from 'react';
import {onError} from '@apollo/client/link/error';
import {setContext} from '@apollo/client/link/context';
// import { ApolloClient } from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import {ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  Observable,} from '@apollo/client';
  import {getMainDefinition} from '@apollo/client/utilities';
import {ToastMessage} from '../../components/ToastMessage';

// // apollo cache
const cache = new InMemoryCache({});


// set up authlink
const authLink = setContext(async (_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = await localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      token: token ? token : '',
    },
  };
});

// set up apollo client
export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({graphQLErrors, networkError, operation}) => {
      if (
        graphQLErrors &&
        operation.query.definitions[0].operation === 'mutation'
      ) {
        graphQLErrors.map(({message}) => {
          if (message !== 'Device already exist') {
            ToastMessage("ERROR", message);
          }
        });
        return;
      }
      if (operation.query.definitions[0].operation === 'mutation') {
        ToastMessage("ERROR", 'Network error');
      }
      if (networkError) {
        ToastMessage("ERROR", 'Network error');
      }
      if (graphQLErrors) {
        console.log(graphQLErrors[0].message, 'kkkkkkk');
      }
    }),
    authLink,
    ApolloLink.split(
      ({query}) => {
        const {kind, operation} = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      }, 
     
      createUploadLink({
        uri: `http://localhost:3333/graphql`,
        headers: {
          "keep-alive": "true"
        }
      }),
    ),
  ]),
  cache,
});

 

// export const client = new ApolloClient({
//   cache,
//   uri: `http://localhost:3333/graphql`,

// });

// const uploadLink = createUploadLink({
//   uri: 'http://localhost:3333/graphql',
//   headers: {
//     "keep-alive": "true"
//   }
// });

// export const client = new ApolloClient({
//   cache,
//   link: uploadLink
// });