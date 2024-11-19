import React, { useContext } from 'react'
import Contextapi1 from '../contextapi/Contextapi1'

export default function B({p3}) {

    var record = useContext(Contextapi1);
  return (
    <div>B, <b>Using Context Api:</b>{record}
      <hr/>
      <b>State Lift: {p3}</b>
    </div>
  

  )
}
