import React from 'react'
import Comp3 from './Comp3'
import MyContext from '../Contextapi'

export default function 
(props) {
    console.log(React);
    console.log(React.useContext(MyContext));
  return (
    <div>
          Comp2
         <hr/>
         using consumer: {React.useContext(MyContext)}
         <hr/>
         <Comp3 x2={props.x1}/>
    </div>
  )
}
