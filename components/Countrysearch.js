import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Leftcountrycomp from './Leftcountrycomp'
import Rightcountrycomp from './Rightcountrycomp'

export default function Countrysearch() {
    var [country,setcountry] = useState("");

    function countryfunction(val){
        console.log("country called");
        console.log(val);
        setcountry(val);
    }
  return (
    <Container>
        <h1>Country Search</h1>
        <Row>
        <Col xs={3} className='border p-3'>
        <Leftcountrycomp p2={countryfunction}/>
        </Col>
        <Col xs={9} className='border p-3'>
        
        <Rightcountrycomp p1={country}/>
        </Col>
        </Row>
    </Container>
  )
}
