import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetchapi1 from '../customhooks/useFetchapi1';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addRecordInCart } from '../reduxcode/slices/cartSlice';

export default function Singleproduct() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
    var {productid} = useParams();
    console.log(productid);
    var allProducts = useFetchapi1(process.env.REACT_APP_FAKESTORE + '/products/'+productid);
    console.log(allProducts);

    function addToCart(obj){
      console.log(obj);
      // dispatch(addRecordInCart(obj));
      var cartRecord = localStorage.getItem('cartRecord');
      console.log(cartRecord); // null or [{},{}]
      var dataTostore = obj;

      if(cartRecord===null){
        console.log("First Record");
      var arr = [];
      arr.push(dataTostore)
      localStorage.setItem('cartRecord',JSON.stringify(arr));
      dispatch(addRecordInCart(dataTostore))

      console.log("Product Added");
      navigate('/cart')
      }
      else{
        console.log('2nd product onward');
        // check product exists or not
        cartRecord = JSON.parse(cartRecord);
        console.log(cartRecord);

        var filterData = cartRecord.filter(val=> val.id == dataTostore.id);
        console.log(filterData, filterData.length);

        if(filterData.length == 0){
          dispatch(addRecordInCart(dataTostore))
          cartRecord.push(dataTostore);
          localStorage.setItem('cartRecord', JSON.stringify(cartRecord));
          console.log("Product Update");
          navigate("/cart")
        }
        else{
          alert("PRODUCT EXISTS");
        }


      }

    }

  return (
    <>
    {
      allProducts && Object.keys(allProducts).length>0 && (
        <Container className='pt-4 pb-4'>
          <Row>
            <Col lg={6}>
            <Image src={allProducts.image} fluid/>
            
            </Col>
            <Col lg={6}>
             <h1>${allProducts.price}</h1>
             <h4>{allProducts.title}</h4>
             <p>CATEGORY:

              <Link className='nav-link' to={"/fakestore-electronics/"+allProducts.category}>{allProducts.category}</Link>
             </p>
             <p>
              {allProducts.description}
             </p>
             <p>
              <Button onClick={()=>{addToCart(allProducts)}}>Add To Cart</Button>
             </p>
            
            </Col>

          </Row>

        </Container>
      )
    }
    </>
  )
}
