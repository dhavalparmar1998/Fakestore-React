import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';

export default function Rightcountrycomp({p1}) {
  var[api,setapi] = useState([]);
 

    useEffect(()=>{
        var apipath = 'https://restcountries.com/v3.1/all'
        if(p1!=""){
            apipath= `https://restcountries.com/v3.1/name/${p1}`
        }

        console.log(apipath);

        fetch(apipath)
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                setapi(json)
            })
    },[p1])
  return (
    <Container>
    <h1>countries,{p1}</h1>
    <Row>
        {
            api && api.map((val)=>
                <Col md={3}>
                    <Image src={val.flags.png} fluid></Image>
                    <p className='text-center'>{val.name.common}</p>
                </Col>
            )
        }
    </Row>
</Container>
  )
}
