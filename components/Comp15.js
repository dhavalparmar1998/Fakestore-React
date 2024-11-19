import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { changebrandName } from '../reduxcode/slices/brandSlice'


export default function Comp15() {
  let dispatch = useDispatch();
  var x1 = useRef();
  var x2 = useRef();
  function f1(){
    var record = {
      data1: x1.current.value,
      data2: x2.current.value
    }
    console.log(record);
    dispatch(changebrandName(record));
  }
  return (
    <div>Comp15
        <hr/>
    <input type='text' ref={x1}/>
    <input type='text' ref={x2}/>
    <button onClick={f1}>Enter</button>
    </div>
  )
}
