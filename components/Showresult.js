import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Showresult({moviedata,heading}) {
    console.log(moviedata);
  return (
    <Container>
        <h1>{heading}</h1>
        <Row>
            {
                moviedata && moviedata.length>0 && moviedata.map(({original_title,poster_path,vote_average,id})=>
                    <Col md={3}>
                        <Image src={"https://image.tmdb.org/t/p/w500"+poster_path} fluid></Image>
                        <h4>{original_title}</h4>
                        <p>Rating : {vote_average}</p>
                        <p>
                            <Link to={"/single-movie/"+id}>View</Link>
                        </p>

                    </Col>
                )
            }
        </Row>
    </Container>
  )
}
