import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

export default function Addgroup1() {
  const {register, handleSubmit,formState: {errors},resetField} = useForm();
  var [msg,setMsg] = useState('');
  function myfunction(value){
    // console.log(value);
    var record = JSON.stringify(value);

    var apiPath = process.env.REACT_APP_JSONAPI+'/group';

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
      setMsg('Group Added')
      resetField("groupName")
    })
  }
  return (
    <Container>
      <h1>Add Group</h1>
      <hr/>
      <Form onSubmit={handleSubmit(myfunction)}>
      <input
        {...register("groupName", { required: true, minLength: 2 })}
        type="text"
        placeholder="Group Name: Friends"
        className="form-control"
      />
      {errors.groupName?.type === "required" && (
        <p className="alert alert-danger"> Group name is required</p>
      )}
      {errors.groupName?.type === "minLength" && (
        <p className="alert alert-danger"> Group  Name minLength : 2</p>
      )}
      <br />
      <Button variant="dark" type="submit">Add Group</Button>
    </Form>
    {msg}

    </Container>
  )
}
