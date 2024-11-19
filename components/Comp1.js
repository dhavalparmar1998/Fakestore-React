import React from 'react'
import Comp2 from './Comp2'

export default function Comp1(props) {
  return (
    <div>
         Comp1
        {/* {props.name} */}
        <hr/>
        <Comp2 x1={props.username}/>
    </div>
  )
}
