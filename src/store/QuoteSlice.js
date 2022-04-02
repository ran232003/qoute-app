import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name:"quote",
    initialState:{quotes:[]},
    reducers:{
        addQuote(state,action){
            state.quotes.push(action.payload)
        },
        checkQuote(state,action){
            
        }
    }
})
export default quoteSlice;
export const quoteActions = quoteSlice.actions;
