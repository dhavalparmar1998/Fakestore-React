import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Right({p1}) {
    const catname = useSelector((state)=>state.categoryname.value);
    console.log(catname);
    var[api,setapi] = useState([]);

    useEffect(()=>{
        var apipath = 'https://fakestoreapi.com/products'
        if(p1!=""){
            apipath= `https://fakestoreapi.com/products/category/${catname}`
        }

        console.log(apipath);

        fetch(apipath)
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                setapi(json)
            })
    },[catname])
  return (
    <Container>
        <h1>Products,{catname}</h1>
        <Row>
            {
                api && api.map(({image,title,price,id})=>
                    <Col md={3}>
                        <Image src={image} fluid></Image>
                        <h2 className='text-center'>₹{price}</h2>
                        <p><Link to={'/productpage/'+id}>{title}</Link></p>
                        <Button>Add To Cart</Button>
                        {/* <p>{title}</p> */}
                    </Col>
                )
            }
        </Row>
    </Container>
  )
}
