import React from 'react'

export default function A({p2,x1}) {
    function f1(txtdata){
        console.log("Comp A", txtdata);
        x1(txtdata)
    }
  return (
    <div>A, <b>Props Drilling: {p2}</b>
    <hr/>
    <input type='text' onChange={(ev)=>{f1(ev.target.value)}}/>
    </div>
  )
}
