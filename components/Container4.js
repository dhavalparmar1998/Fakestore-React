import axios from 'axios';
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function Container4() {
    var textboxref = React.createRef();
    const [category, changevalue] = React.useState([]);
    function getvalue(){
        var categoryname = textboxref.current.value;
        console.log("clicked");
        // var countryname = textboxref.current.value;
    
        var apipath = (categoryname != "")?(`https://fakestoreapi.com/products/category/`+categoryname):(`https://fakestoreapi.com/products`)

        axios.get(apipath)
        .then(function (response) {
            // handle success
            console.log(response);
            changevalue(response.data)
          })

    }
  return (
  <Container>
      <div className='p-5 border border-4'>
        <h4>Products</h4>
        <input ref={textboxref} id='categoryname' type='text' placeholder='category Name'/>
     <button onClick={getvalue}>Search</button>
     <hr />  
     <Row>
        {
           category && category.length>0 &&category.map((obj)=>{
                return(
                    <Col xl={3}>
                    <Image src={obj.image} fluid/>
                    <h4>{obj.title}</h4>
                  </Col>
                )
            })
        }
     </Row>
    </div>
  </Container>
  )
}
