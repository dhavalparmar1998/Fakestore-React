import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Showresult from './Showresult';
import useFetchapi from '../customhooks/useFetchapi';



export default function Searchcomp() {
    var result = useParams();
    console.log(result);
    var apipath = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${result.txtrecord}&page=1`;
    var ans = useFetchapi(apipath,result.txtrecord);
    console.log(ans);

//     var [data,setdata] = useState([]);
//     useEffect(()=>{
//         var apipath = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${result.txtrecord}&page=1`;
// fetchapi(apipath)
// .then(val=>{
//     setdata(val.results);
// })
        
//     },[result.txtrecord])
  return <Showresult moviedata={ans} heading={"Movie Name:" + result.txtrecord}/>
}
