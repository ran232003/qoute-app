import React from "react";
import { useParams } from 'react-router-dom'
const QuotePage = (props)=>{
    const{id} = useParams();
    console.log(id);
    return(
        <div>
            alll dd
        </div>
    )
}
export default QuotePage;