import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default function Logincomp() {
  return (
    <>
    <Container >
        <h1 >Login Page</h1>
        <Form >
         
            <input type='email' placeholder='Enter Email Id' className='form-control'/><br/>
            <input type='text' placeholder='Enter Password' className='form-control'/><br/>
            <Button type='submit'>Submit</Button>
        </Form>
    </Container>
    </>
  )
}
