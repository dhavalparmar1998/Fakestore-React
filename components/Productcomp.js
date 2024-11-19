import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Productcomp(props) {
    console.log(props);
    function myfunc(){
        console.log("testing");
        // props.name = "new product";
        
    }
  return (
    <div>
        <Image src={props.path} fluid />
        <h2>{props.price}</h2>
        <p>{props.name}</p>
        <p>
               
        <Button onClick={myfunc} variant="info">Add to cart</Button>
        </p>


    </div>
  )
}
