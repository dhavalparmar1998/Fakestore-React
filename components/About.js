import React, { useState } from 'react'
// import About1 from './About1';
import About1 from './About1';




export default function About() {
    var[count , setcount] = useState(10);

    function f1(){
        setcount(count+10);
    }
  return (
    <div className='container'>
        <h1>useState() variable</h1>
        <p>{count}</p>
        <button onClick={f1}>Change</button>
        <button onClick={()=>{f1()}}>Change</button>
        <button onClick={()=>{setcount(count+200)}}>Change</button>

        <hr/>
       <About1 p1={count}/>
    </div>
  )
}
