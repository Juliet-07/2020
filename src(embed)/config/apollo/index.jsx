import AsyncStorage from '@react-native-community/async-storage';
import {ApolloClient, InMemoryCache, ApolloLink} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {setContext} from '@apollo/client/link/context';
import {createUploadLink} from 'apollo-upload-client';
import ShowMessage, {type} from '../../components/showMessage';
// 1)
const cache = new InMemoryCache({});

// 2)
const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      ...headers,
      token: token ? token : '',
    },
  };
});

// 3)
const index = new ApolloClient({
  link: ApolloLink.from([
    onError(({graphQLErrors, networkError, operation}) => {
      if (
        graphQLErrors &&
        operation.query.definitions[0].operation === 'mutation'
      ) {
        graphQLErrors.map(({message}) => {
          if (message !== 'Device already exist') {
            ShowMessage(type.ERROR, message);
          }
        });
        return;
      }
      if (operation.query.definitions[0].operation === 'mutation') {
        ShowMessage(type.ERROR, 'Network error');
      }
      if (networkError) {
        ShowMessage(type.ERROR, 'Network error');
      }
      if (graphQLErrors) {
        ShowMessage(type.ERROR, 'Graphql error');
      }
    }),
    authLink,
    createUploadLink({
      uri: 'http://192.168.43.17:3003/graphql',
      credentials: 'include',
    }),
  ]),

  cache,
});
export default index;
