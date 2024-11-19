import React from 'react'
import Comp16 from './Comp16'
import Comp17 from './Comp17'
import { Col, Row } from 'react-bootstrap'

export default function Comp13() {
  return (
    <div>Comp13
       <hr/>
      <Row>
        <Col xs={3} className='p-4 border'>
        <Comp16/>
        </Col>
        <Col xs={3} className='p-4 border'>
        <Comp17/>
        </Col>
      </Row>
    </div>
  )
}
