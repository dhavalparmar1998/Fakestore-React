import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

export default function Edituser() {
    let navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    let urldata = useParams();
    console.log(urldata);

    function myfunction(values){
        console.log(values);
        var record = JSON.stringify(values);
        console.log(record);

        var apipath = process.env.REACT_APP_JSONAPI+'/users/'+urldata.userid;
        fetch(apipath , {
            method: 'PUT',
            body:record,
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            navigate("/show-users");
        })
    }

    const [data,setdata] = useState({})
    useEffect(()=>{
        var apipath = process.env.REACT_APP_JSONAPI+'/users/'+urldata.userid;
        fetch(apipath , {
            method: 'GET'
           
        })
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
           setdata(val);
        })



    },[urldata.userid])
  return (
    <Container >
    <h1 >Update Page</h1>
        <Form onSubmit={handleSubmit(myfunction)}>
            <input defaultValue={data.name}  {...register("name", { required: true, minLength:4})} type='text' placeholder='Enter Name' className='form-control'/>
       
       
            <br/>
            <input defaultValue={data.mobile}   {...register("mobile")} type='text' placeholder='Enter Phone Number' className='form-control' /><br/>
            <input defaultValue={data.email}  {...register("email")}  type='email' placeholder='Enter Email Id' className='form-control'/><br/>
            <input defaultValue={data.password}  {...register("password", { required: true})} type='text' placeholder='Enter Password' className='form-control'/>
        
            <br/>
            <input defaultValue={data.cpassword}  {...register("cpassword", { required: true})} type='text' placeholder='Confirm Password' className='form-control'/>
            
       
       
            <br/>
            <Button type='submit'>Update</Button>
        </Form>
    </Container>
  )
}
