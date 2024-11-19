import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Fakestorehome from './Fakestorehome';

export default function Home() {
    const navigate = useNavigate();
    function myfunc(){
        navigate("fakestore-home");
    }
  return (
    <div>
        <Container>
          <Fakestorehome/>
            {/* <button onClick={myfunc}>Redirect</button>
            <hr/>
            <Link  to="/productpage/1">Product 1</Link>
            <Link to="/productpage/2">Product 2</Link>
            <Link to="/productpage/3">Product 3</Link> */}
        </Container>
    </div>
  )
}
