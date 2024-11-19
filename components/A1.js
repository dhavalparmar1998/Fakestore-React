import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import A from './A'
import B from './B'

export default function A1({p1}) {

    var[brand,setbrand] = useState("nike");

    function getdatainparent(childcompvalue){
        console.log("getdatainparent called" , childcompvalue);
        setbrand(childcompvalue);
    }
  return (
    <div>
        <h4>A1</h4>
        <hr/>
        <Row>
            <Col xs={6} className='p-4 border'>
            <A p2={p1} x1={getdatainparent}/>
            </Col>
     
        
            <Col xs={6} className='p-4 border'>
            <B p3={brand}/>
            </Col>
            </Row>
    </div>
  )
}
