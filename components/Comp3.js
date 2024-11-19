import React from 'react';
import MyContext from '../Contextapi';


export default function Comp3(props) {
  return (
    <div>
      Comp3, {props.x2}
      <hr/>
      using consumer:
      <MyContext.Consumer>
  {value => <h4>{value}</h4>}
</MyContext.Consumer>
    </div>
  )
}
