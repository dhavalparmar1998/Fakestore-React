import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { passCategoryName } from '../reduxcode/slices/categorynameslice';


export default function Left() {
    let dispatch = useDispatch();
    const[apidata, setapidata] = useState();
   

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                setapidata(json)
            })
    },[]);

    function getCategoryName(catname){
        console.log(catname);
        dispatch(passCategoryName(catname))
       

    }
  return (
  <>
  <Container>
    <h2>Categories</h2>
    <ul>
        {
            apidata && apidata.length>0 && apidata.map((val)=>
                <li onClick={()=>{getCategoryName(val)}}>{val}</li>
            )
        }
    </ul>
  </Container>
  </>
  )
}
