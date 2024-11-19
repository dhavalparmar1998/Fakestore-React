import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Left from './Left'
import Right from './Right'

export default function Parent2() {
    var [cat,setcat] = useState("");

    function parent2function(val){
        console.log("Parent2function called");
        console.log(val);
        setcat(val);
    }
  return (
   <Container>
    <h1>State Lift Example</h1>
    <Row>
        <Col xs={3} className='border p-3'>
        <Left p2={parent2function}/>
        </Col>
        <Col xs={9} className='border p-3'>
        
        <Right p1={cat}/>
        </Col>
    </Row>
   </Container>
  )
}
