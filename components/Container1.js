import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import React from 'react';

function Container1() {
  var textboxref = React.createRef();

  const [value,changevalue] = React.useState([]);
  console.log(value);
  console.log(typeof changevalue);
  function getvalue(){
    console.log("clicked");
    var countryname = textboxref.current.value;

    var apipath = (countryname != "")?(`https://restcountries.com/v3.1/name/`+countryname):(`https://restcountries.com/v3.1/all`)

    fetch(apipath)
    .then(res=>res.json())
    .then(apidata=>{
      console.log(apidata);
      changevalue(apidata)
    });


  }
  return (
    <Container>
      <div className='p-5 border border-4'>
     <h2>Reference Variable</h2>  
     <input ref={textboxref} id='countryname' type='text' placeholder='country Name'/>
     <button onClick={getvalue}>Search</button>
     <hr />      
      <Row>
        {
          value && value.length && value.map((obj)=>{
            return(
              <Col xl={3}>
                <Image src={obj.flags.png} fluid/>
                <h4>{obj.name.common}</h4>
              </Col>
            )
          })
        }
      </Row>
      </div>
    </Container>
  );
}

export default Container1;
