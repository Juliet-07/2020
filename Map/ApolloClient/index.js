import React from 'react'
import {ApolloClient, InMemoryCache} from '@apollo/client'
import {ApolloProvider} from '@apollo/client'
import ExchangeRates from './ExchangeRate'
import Dog from './Dogs'



// FOR CONNECTING CLIENT`
const client = new ApolloClient({
        uri: 'https://48p1r2roz4.sse.codesandbox.io',
        cache: new InMemoryCache()
    })
       
const App = () =>{
    return(
        <ApolloProvider client={client}>
           < ExchangeRates />
           {/* <Dog/> */}
        </ApolloProvider>
        )
    }

export default App