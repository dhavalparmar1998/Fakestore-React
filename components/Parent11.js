import React, { useState } from 'react'
import Child11 from './Child11'

export default function Parent11() {
    var[data,setData] = useState(100);
  return (
    <div className='container'>
        <h1>Parent11 {data}</h1>
        <button onClick={()=>{setData(data+10)}}>Change</button>
        <hr/>
        <Child11/>
    </div>
  )
}
