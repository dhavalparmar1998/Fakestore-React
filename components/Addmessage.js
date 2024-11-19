import React, { useEffect, useRef, useState } from 'react'

export default function Addmessage() {

    const x1 = useRef();
    const x2 = useRef();

    const[msg,setmsg] = useState("");
    const[apidata,setapidata] = useState("");


    useEffect(()=>{
        fetch(process.env.React_APP_PATH + "/library/67149fa7d8e79f927ac17f25")
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            setapidata(val.data)
        })
    },[])

    function myfunc(){
        var datatostore = {
            messagetext: x2.current.value,
            libid: x1.current.value
        }

        fetch(process.env.React_APP_PATH + "/message",{
            method:"post",
            body: JSON.stringify(datatostore),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            setmsg(val.message)
        })
    }
  return (
    <div className='container'>
        <h1>Addmessage</h1>
        <select ref={x1}>
            <option value="">Please Select Library</option>
            {
                apidata && apidata.length > 0 && apidata.localeCompare(val=>
                    <option value={val._id}>{val.lname}</option>
                )
            }
        </select>
        <br/>

        <textarea ref={x2} cols="60" rows="6"></textarea>

        <button onClick={myfunc}>Add</button>
        <p>{msg}</p>
    </div>
  )
}
