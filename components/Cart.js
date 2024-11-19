
import React from 'react'
import { Button, Container, Row,Col,Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteRecordFromCart } from '../reduxcode/slices/cartSlice';


export default function Cart() {

    let dispatch = useDispatch();
    let storageData = useSelector(state=> state.cart.value);
    console.log(storageData)

    function deleteFromCart(proid){
        console.log(proid);
        
        var dataFromStorage = JSON.parse(localStorage.getItem('cartRecord'));
        console.log(dataFromStorage);

        if(dataFromStorage.length===1){

            localStorage.removeItem('cartRecord');
            dispatch(deleteRecordFromCart([]));
        }
        else{
            var filterData = dataFromStorage.filter(val=> val.id!==proid)
            console.log(filterData);

            // var finalrecord = JSON.parse(filterData);
            localStorage.setItem('cartRecord',JSON.stringify(filterData))

            // var finalData = JSON.parse(filterData);
            // console.log(finalData);
            // localStorage.setItem('cardRecord',JSON.stringify(finalData));
            dispatch(deleteRecordFromCart(filterData));
            
        }
         
        
    }
  return (
    <Container>
        <h1>Cart</h1>
        <Row>
            {
                storageData && storageData.length>0 && storageData.map(({image,title, price, id})=>
                    <Col xs={6} lg={3} key={id}>
                        <Image fluid src={image}/>
                        <h4>{price}</h4>
                        <p>
                        <Link to={"/productpage/"+id}>{title}</Link>
                        </p>
                        <Button onClick={()=>{deleteFromCart(id)}}>Delete</Button>
                    
                    </Col>
                
                )
            }
        </Row>
    </Container>
  )
}





