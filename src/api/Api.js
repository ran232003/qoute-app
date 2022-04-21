import { useDispatch } from "react-redux";
import { quoteActions } from "../store/QuoteSlice";

export const addQuteApi =async (obj)=>{
    
    console.log("api");
    const res = await fetch("http://localhost:5000/api/quote/addQuote",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    const data = await res.json();
    console.log(data);
    return data;
    
}

export const getQuotes =async ()=>{
    const res = await fetch("http://localhost:5000/api/quote/getQuotes");
    const data = await res.json();
    console.log("data",data);
    if(data.msg = "ok"){
        return data.quotes;
    }

}

export const changeRating = async(rating,id)=>{

    const res = await fetch("http://localhost:5000/api/quote/submitRating",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({rating:rating,id:id,userID:"ranfa"})
    })
    const data = await res.json();
    console.log(data);
    return data;
}