import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import A1 from './components/A1';
import B1 from './components/B1';
import Contextapi1 from './contextapi/Contextapi1';



export default function Parent1() {
    var [data,setdata] = useState("");
    var [data1,setdata1] = useState("");
    var getdata = (ev)=>{
        setdata(ev.target.value);
    }
    var getdata1 = (ev)=>{
        setdata1(ev.target.value);
    }
  return (
    <Container>
      <h1>Parent 1</h1>
      <input type='text' onChange={getdata}/>
      <input type='text' onChange={getdata1}/>
      <hr/>
      <Row>
      <Col xs={6} className='p-4 border'>
      <Contextapi1.Provider value={data1}>
        <A1 p1={data}/>
      </Contextapi1.Provider>
      </Col>
      <Col xs={6} className='p-4 border'>
      <B1/>

      
      </Col>
      </Row>
    </Container>
  )
}
