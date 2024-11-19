import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function Addlibrary1() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
      } = useForm();
      const myfunction = (value) => {
        var record = JSON.stringify(value);
        var apipath = process.env.REACT_APP_JSONAPI + "/library";
        fetch(apipath, {
          method: "POST",
          body: record,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((val) => {
            console.log(val);
          });
          resetField("libname"); 
      };
  return (
    <Container>
    <h1>Add Library</h1>
    <br />
    <Form onSubmit={handleSubmit(myfunction)}>
      <input
        {...register("libname", { required: true, minLength: 2 })}
        type="text"
        placeholder="Enter Name"
        className="form-control"
      />
      {errors.libname?.type === "required" && (
        <p className="alert alert-danger"> Library name is required</p>
      )}
      {errors.libname?.type === "minLength" && (
        <p className="alert alert-danger"> Library Name minLength : 2</p>
      )}
      <br />
      <Button variant="dark" type="submit">Add Library</Button>
    </Form>
  </Container>
  )
}
