import React, { useRef } from 'react'
import { changeCategoryName } from '../reduxcode/slices/categorySlice'
import { useDispatch } from 'react-redux'


export default function Comp14() {
  let dispatch = useDispatch();
  var x1 = useRef();
  var x2 = useRef();
  function f1(){
    var record = {
      data1: x1.current.value,
      data2: x2.current.value
    }
    console.log(record);
    dispatch(changeCategoryName(record));
  }
  return (
    <div className='border p-3'>Comp14
    <hr/>
    <input type='text' ref={x1}/>
    <input type='text' ref={x2}/>
    <button onClick={f1}>Enter</button>
    </div>
  )
}
