import React from 'react'
import { useSelector } from 'react-redux'
export default function Comp17() {

    const{value,count} = useSelector((state)=>state.category)
  return (
    <div className='border p-3'>Comp17
    <hr/>
    Name: {value}<br/>
    Quantity: {count}
    </div>
  )
}
