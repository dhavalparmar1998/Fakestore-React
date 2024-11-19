import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

export default function Leftcountrycomp({p2}) {
  var[data,setdata] = useState([]);
  var [countryname,setcountryname] = useState();
  useEffect(()=>{
    if(countryname){
    fetch('https://restcountries.com/v3.1/name/${countryname}')
        .then(res=>res.json())
        .then(json=>{
            console.log(json);
            setdata(json)
        })
      }
},[countryname]);

function f1(){
  console.log(countryname);
  p2(countryname);

}
  return (
    <div>
       <h3>Country</h3>
        <input type='text' value={countryname} onChange={(e)=>setcountryname(e.target.value)} placeholder='Enter Country'/>
        <Button onClick={f1}>
         
          Enter
        </Button>
       
        
      
    </div>
  )
}
