import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { quoteActions } from "../store/QuoteSlice";
import "./AddQuote.css"
const AddQuote = ()=>{
    const[inputs,setInputs] = useState({
        name:"",
        quote:"",
        validName:false,
        validQuote:false,
    });
    const quote = useSelector((state)=>{
        return state.quote;
    })
    const dispatch = useDispatch();

    const handleName = (event)=>{
        const value = event.target.value;
        let valid;
        if(value.length >= 2 && value.length <= 12){
            valid = true;
        }
        else{
            valid = false;
        }
        setInputs(()=>{
            return {validName:valid,name:value,quote:inputs.quote,validQuote:inputs.validQuote}
        })
    }
    const handleQuote = (event)=>{
        const value = event.target.value;
        let valid;
        if(value.length >= 2 && value.length <= 40){
            valid = true;
        }
        else{
            valid = false;
        }
        setInputs(()=>{
            return {...inputs,quote:value,validQuote:valid}
            //return {validName:inputs.validName,name:inputs.name,quote:value,validQuote:valid}
        })
    }

    const submitInput = (event)=>{
        event.preventDefault();
        if(inputs.validName && inputs.validQuote){
            const obj = {name:inputs.name,quote:inputs.quote};
            dispatch(quoteActions.addQuote(obj))
        }
    

    }
console.log(inputs);
console.log(quote);
    return (
        <div className="quote-form">
        <Form>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Author</Form.Label>
             <Form.Control onChange={handleName} type="text" placeholder="Full Name" value={inputs.name} />
            </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Quote</Form.Label>
             <Form.Control onChange={handleQuote} as="textarea" value={inputs.quote} rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitInput}>
    Submit
  </Button>
        </Form>
        </div>
    )
}
export default AddQuote;