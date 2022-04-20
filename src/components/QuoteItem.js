import React from 'react'
import { Link } from 'react-router-dom';
import "./QuoteItem.css";
import ReactStars from 'react-stars'
const QuoteItem = (props)=>{
    const {id,name,quote} = props;
    const ratingChanged = (newRating)=>{
        console.log("rating",newRating);
        
    }
    return(
       
        <div className= 'quote'>
            <div className = "myQuote">
            <p>"{quote}"</p>
            </div>
            <div className='test'>
            <div className = "myName">
            <p>{name}</p>          
            </div>
            <div className='test2'>
                <span className='ratings'>
                Your Rating 
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={'#ffd700'}
                     />
                </span>
                <span className='ratings2'>
                Crowd Rating
                <ReactStars className='stars'
                    count={1}
                    color1 = {'#ffd700'}
                    onChange={ratingChanged}
                    size={24}
                    color2={'#ffd700'}
                     />
                    <span className='rate'>4.5/5</span>
                </span>
            </div>
            </div>
          
        </div>
       
    )
}
export default QuoteItem;