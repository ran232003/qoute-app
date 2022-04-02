import React from 'react'
import QuoteItem from './QuoteItem';

const QuoteList = (props)=>{
    const {quotes} = props;
    console.log(quotes)
    return (
    <div>
        <ul>
        {quotes.map((item)=>{
            return(
                <QuoteItem
                id = {item.id}
                name = {item.name}
                quote = {item.quote}
                />
            )
        })}
        </ul>
        </div>
        )
}
export default QuoteList;