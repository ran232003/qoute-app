import React from 'react'
import QuoteItem from './QuoteItem';

const QuoteList = (props)=>{
    const {quotes} = props;
    console.log(quotes)
    return (
    <div>
        <ul>
        {quotes.map((item)=>{
            console.log(item._id)
            return(
                <QuoteItem
                key = {item._id}
                id = {item._id}
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