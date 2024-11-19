import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import fetchapi from '../customFunction/fetchapi';
import { Col, Container, Image, Row } from 'react-bootstrap';


export default function Singlepage() {

    var[data1,setdata1] = useState({});
    var[data2,setdata2] = useState({});
    let ans = useParams();

    console.log(ans);

    let apipath = `https://api.themoviedb.org/3/movie/${ans.movieid}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    console.log(apipath);

    let apipath1 = `https://api.themoviedb.org/3/movie/${ans.movieid}/credits?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;

    useEffect(()=>{
        fetchapi(apipath)
        .then(val=>{
            setdata1(val);
        })

        fetchapi(apipath1)
        .then(val=>{
            setdata2(val.cast);
        })
    },[])
  return (
    <>
    {
        data1 && Object.keys(data1).length>0 && (
            <>
             <Container>
                <Row>
                    <Col xs={3}>
                    <Image src={"https://image.tmdb.org/t/p/w500"+data1.poster_path} fluid></Image>
                    </Col>
                      <Col xs={9}>
                      <h4>{data1.original_title}</h4>
                        <p>Rating : {data1.vote_average}</p>
                        <p>Release Date : {data1.release_date}</p>
                        <p>
                            {data1.overview}
                        </p>
                      </Col>
                    
                    
                </Row>
             </Container>
             <Container>
             <h3>Cast Details</h3>
             <Row>

                {
                    data2 && data2.length>0 && data2.map(({profile_path,original_name})=>
                      <Col lg={1}>
                        <Image alt={original_name} src={"https://image.tmdb.org/t/p/w500"+profile_path} fluid></Image>
                        <h6>{original_name}</h6>
                      </Col>
                    )
                }
             </Row> 
             </Container>

            </>
        )
       
    }
    </>
  )
}
