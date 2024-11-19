import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Adduser() {

    let navigate = useNavigate();

    const x1 = useRef();
    const x2 = useRef();
    const x3 = useRef();
    const x4 = useRef();

   

    const[msg,setmsg] = useState("");

  

    function myfunc(){
        var datatostore = {
            name: x1.current.value,
            email: x2.current.value,
            mobile: x3.current.value,
            password: x4.current.value
        }
        
        console.log(JSON.stringify(datatostore));
        console.log(process.env.REACT_APP_PATH + "/users");

        fetch(process.env.REACT_APP_PATH  + '/users',{
            method:"post",
            body: JSON.stringify(datatostore),
            headers:{
                'Content-Type':"application/json"
            }
        })
        .then(res=>res.json())
        .then(val=>{
            if(val['status']){
                navigate("/login-user")
            }
            else{
                setmsg(val.message)
            }
            console.log(val);
           
        })
    }
  return (
    <div className='container'>
        <h1>Add User</h1>

        <input type='text' ref={x1} placeholder='name' /> <br/>
        <input type='text' ref={x2} placeholder='email' /> <br/>
        <input type='text' ref={x3} placeholder='mobile' /> <br/>
        <input type='text' ref={x4}  placeholder='password' /> <br/>

        <button onClick={myfunc}>Add</button>
        <p>{msg}</p>
    </div>
  )
}
