import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name:"quote",
    initialState:{quotes:[]},
    reducers:{
        addQuote(state,action){
            state.quotes.push(action.payload)
        },
        checkQuote(state,action){
            
        },
        dbQuotes(state,action){
            state.quotes = action.payload;
        },
        addRating(state,action){
            let id = action.payload.id;
            let quote = state.quotes.find((obj)=>{
                if(obj._id = id){
                    obj.myRating = action.payload.rating;
                    obj.count =  obj.count + 1;
                    obj.totalRating = obj.totalRating + obj.myRating 
                    obj.avrageRating = obj.totalRating / obj.count
                }

            })
            // quote.myRating = action.payload.rating;
            // quote.count =  quote.count + 1;
            // quote.totalRating = quote.totalRating + quote.myRating 
            // quote.avrageRating = quote.totalRating/ quote.count

        }
    }
})
export default quoteSlice;
export const quoteActions = quoteSlice.actions;
