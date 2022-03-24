import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name:"quote",
    initialState:{quotes:[]},
    reducers:{
        addQuote(state,action){
            state.quotes.push(action.payload)
        }
    }
})
export default quoteSlice;
export const quoteActions = quoteSlice.actions;
