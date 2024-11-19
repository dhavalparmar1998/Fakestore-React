import React from 'react'
import Showresult from './Showresult';
import useFetchapi from '../customhooks/useFetchapi';




export default function Popular(apipath) {
    var apipath = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`;

   var ans = useFetchapi(apipath)
    console.log(ans);
  return <Showresult moviedata={ans} heading="Popular Movies"/>
}
