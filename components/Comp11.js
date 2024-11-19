import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Comp12 from './Comp12'
import Comp13 from './Comp13'

export default function 
() {
  return (
    <div>
        <h1>Comp 11</h1>
        <hr/>
        <Row>
            <Col xs={6} className='border '>
                <Comp12 className="text-center"/>
            </Col>
            <Col xs={6} className='border '>
            <Comp13 className="text-center"/>

</Col>
        </Row>
    </div>
  )
}
