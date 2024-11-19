import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Showproduct({products}) {

  return (
    <Row>
        {
            products && products.map(({image,title,price,id})=>
                <Col xs={6} lg={3}>
                    <Image fluid src={image}/>
                    <h4>{price}</h4>
                    <p>
                        <Link to={"/productpage/"+id}>{title}</Link>
                    </p>
                    <Button>Add To Cart</Button>
                </Col>
            )
        }
    </Row>
  )
}
