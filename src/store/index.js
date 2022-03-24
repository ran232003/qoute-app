import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./QuoteSlice";

const store = configureStore({
reducer:{quote:quoteSlice.reducer}
})
export default store