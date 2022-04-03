import React from 'react'
import { Link } from 'react-router-dom';
import "./QuoteItem.css";
const QuoteItem = (props)=>{
    const {id,name,quote} = props;
    return(
        <Link to={`qute-page/${id}`} style={{ textDecoration: 'none',color:'black' }}>
        <div className= 'quote'>
            <div className = "myQuote">
            <p>"{quote}"</p>
            </div>
            <div className = "myName">
            <p>{name}</p>
            </div>
        </div>
        </Link>
    )
}
export default QuoteItem;