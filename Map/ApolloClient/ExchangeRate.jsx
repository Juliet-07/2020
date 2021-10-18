import React from 'react'
import {useQuery, gql} from '@apollo/client'

const EXCHANGE_RATES = gql`
    query GetExchangeRates {
        rates(currency: "usd"){
            currency
            rate
            name
        }
    }
`

const ExchangeRates = () =>{
    const {loading, error, data} = useQuery(EXCHANGE_RATES)

    if (loading) return <p>Loading...</p>
    if (error) return `Error! ${error.message}`

    return data.rates.map(({currency, rate, name})=>(
        <div key={currency}>
            <p>{currency}:{rate}:{name}</p>
        </div>
    ))
   
}
export default ExchangeRates
