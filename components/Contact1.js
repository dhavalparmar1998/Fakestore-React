import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import { json } from 'react-router-dom';

export default function Contact1({p1}) {
    console.log("contact1 called" , Math.random());
    var[apidata,setapidata] = useState([]);
    useEffect(()=>{
      console.log("Call Api");
      var apipath = "https://fakestoreapi.com/products";
      if(p1!=""){
        apipath = `https://fakestoreapi.com/products/category/${p1}`;
      }
      console.log(p1);
      console.log(apipath);

      fetch(apipath)
            .then(res=>res.json())
            .then(json=>{
              console.log(json);
              console.log(Math.random());
              setapidata(json);
            })

            return ()=>{
              setapidata([]);
            }


            
            

    },[p1]);
  return (
    <div>Contact1, {p1}
    
    <hr/>
    <Row>
      
      {
        apidata && apidata.length>0 && apidata.map(({title,image})=>
          <Col md={3}>
             <Image src={image} fluid/>
             <h2>{title}</h2>
          </Col>
        )

        
       
      }
    
    </Row>
    </div>
  )
}
