import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import useFetchapi1 from '../customhooks/useFetchapi1';
import { Container } from 'react-bootstrap';

export default function Addmessage1() {
  const {register, handleSubmit,formState: {errors},resetField} = useForm();
  var [msg,setMsg] = useState('');
  function myfunction(value){
    // console.log(value);
    var record = JSON.stringify(value);

    var apiPath = process.env.REACT_APP_JSONAPI+'/message';

    fetch(apiPath , {
      method:'POST',
      body:record,
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res=>res.json())
    .then(val=>{
      console.log(val);
      setMsg('Message Added')
      resetField("libid")
      resetField("messageText")
    })
  }
  var ans_lib = useFetchapi1(process.env.REACT_APP_JSONAPI+'/library')
  console.log(ans_lib);
  return (
    <Container>
      <h1>Add Message</h1>
      <hr/>
      <form onSubmit={handleSubmit(myfunction)}>
        <select className='form-control' {...register("libid", { required: true})}>
          <option value=''>Please Select Library</option>
          {
            ans_lib && ans_lib.length > 0 && ans_lib.map(({libName,id})=>
              <option value={id}>{libName}</option>
            )
          }
        </select>
        {errors.libid?.type === "required" && 
        <p className="alert alert-danger"> Please Select Library</p>
      }
      <br/>
      <textarea {...register("messageText", { required: true, minLength:2})} placeholder="Group Name: Friends" className='form-control'></textarea>
      {errors.messageText?.type === "required" && 
        <p className="alert alert-danger"> Message is Required</p>
      }
         {errors.messageText?.type === "minLength" && 
        <p className="alert alert-danger"> Message Length:2</p>
      }
      <br/>
      <button>Add Message</button>
      </form>
      {msg}
    </Container>
  )
}
