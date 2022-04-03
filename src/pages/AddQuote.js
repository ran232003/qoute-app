import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { quoteActions } from "../store/QuoteSlice";
import "./AddQuote.css"
const AddQuote = ()=>{
    const [error,setError] = useState({
        nameInput:false,
        quoteInput:false,
        countName:0,
        countQuote:0
    })
    const[inputs,setInputs] = useState({
        name:"",
        quote:"",
        validName:false,
        validQuote:false
    });
    const quote = useSelector((state)=>{
        return state.quote;
    })
    const dispatch = useDispatch();

    const handleName = (event)=>{
        const value = event.target.value;
        let valid;
        console.log(error.countName)
        if(value.length >= 2 && value.length <= 12){
            valid = true;
            
            if(error.countName>0){
                setError(()=>{
                    return {...error,nameInput:false,countName:1}
                })
            }
        }
        else{
            valid = false;
            if(error.countName>0){
            setError(()=>{
                return {...error,nameInput:true,countName:1}
            })
        }
        }
        setInputs(()=>{
            return {validName:valid,name:value,quote:inputs.quote,validQuote:inputs.validQuote}
        })
    }
    const handleQuote = (event)=>{
        const value = event.target.value;
        let valid;
        if(value.length >= 2 && value.length <= 50){
            valid = true;
            if(error.countQuote>0){
                setError(()=>{
                    return {...error,quoteInput:false,countQuote:1}
                })
            }
        }
        else{
            valid = false;
            if(error.countQuote>0){
                setError(()=>{
                    return {...error,quoteInput:true,countQuote:1}
                })
            }
        }
        setInputs(()=>{
            return {...inputs,quote:value,validQuote:valid}
            //return {validName:inputs.validName,name:inputs.name,quote:value,validQuote:valid}
        })
    }

    const submitInput = (event)=>{
        event.preventDefault();

        if(inputs.validName && inputs.validQuote){
            const id = Math.random();
            const obj = {name:inputs.name,quote:inputs.quote,id:id};
            dispatch(quoteActions.checkQuote(obj))
            dispatch(quoteActions.addQuote(obj))
        }
    

    }

    const handleErrorQuote = ()=>{
        
        setError(()=>{
            return {...error,quoteInput:!inputs.validQuote,countName:1}
        })

    }
    const handleErrorName = ()=>{
        console.log("name")
        setError(()=>{
            return {...error,nameInput:!inputs.validName,countQuote:1}
        })
    }
    return (
        <div className="quote-form">
        <Form>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Author</Form.Label>
             <Form.Control isInvalid = {error.nameInput} onBlur={handleErrorName} onChange={handleName} type="text" placeholder="Full Name" value={inputs.name} />
            </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Quote</Form.Label>
             <Form.Control isInvalid = {error.quoteInput}  onBlur={handleErrorQuote} onChange={handleQuote} as="textarea" value={inputs.quote} rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitInput}>
    Submit
  </Button>
        </Form>
        </div>
    )
}
export default AddQuote;