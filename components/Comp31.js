import React, { Component } from 'react'
import { Col} from 'react-bootstrap'
import ErrorBoundary from './ErrorBoundary'
import Image from './Image'



export default class Comp31 extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Error Boundary1</h3>
        <hr/>
        <div className='row'>
            <Col xs={4}>
            <Image path="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-shirt/a/y/e/m-sp-newveb-kuki-original-imahynz8zyjhz6ve.jpeg?q=70" /></Col>
            <Col xs={4}>
            <Image path="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/r/u/6/-original-imah43ggxav6euay.jpeg?q=70" /></Col>
            <Col xs={4}>
            <ErrorBoundary>
            <Image path="" />
            </ErrorBoundary>
           
            </Col>
        </div>
      </div>
    )
  }
}
