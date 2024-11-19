import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Library from './Library'
import Message from './Message'
import Sendmessage from './Sendmessage'

export default function Sendsms() {
  return (
    <div className='container'>
        <h1>Sendsms</h1>
        <Row>
            <Col xs={4}>
            <section className='border p-3 mb-3'>
              <h2>Libraries</h2>
              <Library />

            </section>
            <section className='border p-3 mb-3'>
              <h2>Message</h2>
              <Message />

            </section>

            
            
            </Col>
            <Col xs={4}>
            <Sendmessage/>
            </Col>
            <Col xs={4}>
            <section>
                <h2>Groups</h2>
                </section></Col>
        </Row>
    </div>
  )
}
