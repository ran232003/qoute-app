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