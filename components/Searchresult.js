import React from 'react'
import useFetchapi1 from '../customhooks/useFetchapi1'
import { Container } from 'react-bootstrap';
import Showproduct from './Showproduct';

export default function Searchresult({catname}) {

  var result = useFetchapi1(process.env.REACT_APP_FAKESTORE + '/products/category/'+catname ,[catname]);
  console.log(result);

  return (
    <Container>
      <h1>All Products From FakeStore, {catname}</h1>
      <Showproduct products={result}/>
    </Container>
  )
}
