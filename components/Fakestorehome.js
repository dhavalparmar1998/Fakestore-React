import React from 'react'
import useFetchapi1 from '../customhooks/useFetchapi1';
import { Container } from 'react-bootstrap';
import Showproduct from './Showproduct';

export default function Fakestorehome() {
    // console.log(process.env.REACT_APP_FAKESTORE + '/products');
    var allProducts = useFetchapi1(process.env.REACT_APP_FAKESTORE + '/products');
    console.log(allProducts);
  return (
    <>
    {
        allProducts && allProducts.length>0 && (
            <Container>
                <h1>All Products From Fakestore</h1>
                <Showproduct products={allProducts}/>
            </Container>
        )
    }
    </>
  )
}
