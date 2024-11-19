import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Left from './Left'
import Right from './Right'

export default function Filter() {
  return (
   <>
   <Container>
    <Row>
      <Col xs={3} classname="p-3 border">
      <Left/>
      </Col>
      <Col xs={9} className='p-3 border'>
      <Right/>
      </Col>
    </Row>
   </Container>

   </>
  )
}
