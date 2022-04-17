import React from 'react'
import { useSelector } from 'react-redux';
import QuoteList from '../components/QuoteList';
const AllQuotes =() => {
    const quote = useSelector((state)=>{
        return state.quote;
    })
    console.log(quote.quotes)
    return ( 
    <div>
        
        <QuoteList
        quotes = {quote.quotes}
        />
    </div> 
    );
}

export default AllQuotes