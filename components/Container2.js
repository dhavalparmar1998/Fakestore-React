import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Productcomp from './Productcomp'
import Comp1 from './Comp1';
import MyContext from '../Contextapi';
import Comp2 from './Comp2';



function Container2() {
  return (
    <Container>
     <h2 className='mt-3 mb-3'>Props</h2>        
      <Row>
        <Col>
        <Productcomp name="shirt" price="1000" path="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/1/u/-original-imaggvukyue8gjhq.jpeg?q=70" />
        </Col>
        <Col>
        <Productcomp name="jeans" price="2000" path="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/4/0/8/m-ausk0935-ausk-original-imah3bjznqveqphx.jpeg?q=70" />
        </Col>
        <Col>
        <h5>Props drill</h5>

        <MyContext.Provider value="2000">
        <Comp1 username="dhaval"/>
        </MyContext.Provider>
        </Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default Container2;
