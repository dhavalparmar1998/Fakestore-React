import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

export default function Registercomp() {

    let navigate = useNavigate();

    const {register, handleSubmit,formState: {errors},watch} = useForm();

    const myfunction = (value)=>{
        var record = JSON.stringify(value);
        var apipath = process.env.REACT_APP_JSONAPI+'/users';
        fetch(apipath , {
            method: 'POST',
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
  return (
    <>
    <Container >
    <h1 >Register Page</h1>
        <Form onSubmit={handleSubmit(myfunction)}>
            <input  {...register("name", { required: true, minLength:4})} type='text' placeholder='Enter Name' className='form-control'/>
            {errors.name?.type === "required" && 
        <p className='alert alert-danger'> Name is required</p>
      }
          {errors.name?.type === "minLength" && 
        <p className='alert alert-danger'> Name minLength:4</p>
      }

            <br/>
            <input {...register("mobile")} type='text' placeholder='Enter Phone Number' className='form-control' /><br/>
            <input {...register("email")}  type='email' placeholder='Enter Email Id' className='form-control'/><br/>
            <input {...register("password", { required: true})} type='text' placeholder='Enter Password' className='form-control'/>
            {errors.password?.type === "required" && 
        <p className='alert alert-danger'> Password is required</p>
      }
            <br/>
            <input {...register("cpassword", { required: true, validate: (value) => value === watch("password")})} type='text' placeholder='Confirm Password' className='form-control'/>
            
            {errors.cpassword?.type === "required" && 
        <p className='alert alert-danger'> Confirm Password is required</p>
      }
             {errors.cpassword?.type === "validate" && 
        <p className='alert alert-danger'> Confirm Password does not match with password</p>
      }
            <br/>
            <Button type='submit'>New User?</Button>
        </Form>
    </Container>
    </>
  )
}
