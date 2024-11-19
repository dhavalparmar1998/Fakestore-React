import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Comp14 from './Comp14'
import Comp15 from './Comp15'

export default function Comp12() {
  return (
    <div>Comp12
      <hr/>
      <Row>
        <Col xs={3} className='p-4 border'>
        <Comp14/>
        </Col>
        <Col xs={3} className='p-4 border'>
        <Comp15/>
        </Col>
      </Row>

    </div>
  )
}
