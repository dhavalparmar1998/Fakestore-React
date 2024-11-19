import React, { useRef, useState } from 'react'
import Contact1 from './Contact1';

export default function Contact() {
  var x1 = useRef();
  var[data, setdata] = useState("");

  function f1(){
    console.log(x1);
    console.log(x1.current.value);
    setdata(x1.current.value);
  }
  return (
    <div className='container'>
      <h1>Search</h1>
      <input ref={x1} type='text'/>
      <button onClick={f1}>Enter</button>
      <hr/>
      <Contact1 p1={data}/>
    </div>
  )
}
