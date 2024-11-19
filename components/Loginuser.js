import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Loginuser() {

    let navigate = useNavigate();
    const x1 = useRef();
    const x2 = useRef();

    const[msg,setMsg] = useState();
    function myfunc(){

        if(x1.current.value=="" || x2.current.value==""){
            toast.error("Data Required")
        }
        else{
            var datatosend = {
                email: x1.current.value,
                password: x2.current.value,
              
            }
        }
     
        
        // console.log(JSON.stringify(datatostore));
        // console.log(process.env.REACT_APP_PATH + "/users");

        fetch(process.env.REACT_APP_PATH  + '/login',{
            method:"post",
            body: JSON.stringify(datatosend),
            headers:{
                'Content-Type':"application/json"
            }
        })
        .then(res=>res.json())
        .then(val=>{
           console.log(val.tokendata);

           
        })
    }
  return (
    <div className='container'>
        <h1>Login</h1>

        <input type='text' ref={x1} placeholder='email'/><br/>
        <input type='text' ref={x2} placeholder='password'/><br/>
        <button onClick={myfunc}>Enter</button>
        <p>{msg}</p>
    </div>
  )
}
