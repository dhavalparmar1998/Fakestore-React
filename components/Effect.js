import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

export default function Effect() {
    const [data,setdata] = useState(0);
    const [data1,setdata1] = useState(1000);
    const [data2,setdata2] = useState(10000);

    function f1(){
        setdata(data+10)
    }
    function f2(){
        setdata1(data1+10)
    }
    function f3(){
        setdata2(data2+10)
    }
    // useEffect(()=>{
    //     console.log("use effect called" , data, Math.random());
    // });

    // useEffect(()=>{
    //     console.log("use effect called" , data, Math.random());
    // },[]);

    // useEffect(()=>{
    //     console.log("use effect called" , data, Math.random());
    //     return()=>{
    //         console.log("Bye Dhaval");
    //     }
    // },[]);

    useEffect(()=>{
        console.log("Use effect called" , data, Math.random());
    },[data,data1])

  return (
    <Container>
        <h1>Use Effect Example</h1>
        <button onClick={f1}>Change1</button>
        <button onClick={f2}>Change2</button>
        <button onClick={f3}>Change3</button>
        <p>{data}</p>
        <p>{data1}</p>
        <p>{data2}</p>
    </Container>
  )
}
