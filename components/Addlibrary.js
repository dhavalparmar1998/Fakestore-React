import React, { useRef, useState } from 'react'

export default function Addlibrary() {
    const x1 = useRef();

    const [msg,setmsg] = useState("");

    function myfunc(){
        var datatostore = {
            lname: x1.current.value,
            uid:'67149fa7d8e79f927ac17f25'
        }

        fetch(process.env.REACT_APP_PATH  + '/library',{
            method:"post",
            body: JSON.stringify(datatostore),
            headers:{
                'Content-Type':"application/json"
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
        <h1>Add Library</h1>
        <input type='text' ref={x1}/> <br/>
        <button onClick={myfunc}>Add</button>
        <p>{msg}</p>
    </div>
  )
}
