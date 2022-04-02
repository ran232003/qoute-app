import React from 'react'
import "./QuoteItem.css";
const QuoteItem = (props)=>{
    const {id,name,quote} = props;
    return(
        <div className= 'quote'>
            <p>{quote}</p>
            <p>{name}</p>
        </div>
    )
}
export default QuoteItem;