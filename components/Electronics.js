import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchapi1 from '../customhooks/useFetchapi1';
import { Container } from 'react-bootstrap';
import Showproduct from './Showproduct';

export default function Electronics() {

    let {catname} = useParams()
    console.log(catname);

    var allProducts = useFetchapi1(process.env.REACT_APP_FAKESTORE + '/products/category/'+catname, [catname]);
    console.log(allProducts);
  return (
    <>
    {
        allProducts && allProducts.length>0 && (
            <Container>
                <h1>All Products From :{catname}</h1>
                <Showproduct products={allProducts}/>
            </Container>
        )
    }
    </>
  )
}
