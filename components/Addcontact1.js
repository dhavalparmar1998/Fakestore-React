import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import * as Yup from 'yup';
import useFetchapi from '../customhooks/useFetchapi';
import useFetchapi1 from '../customhooks/useFetchapi1';


export default function Addcontact1() {
  var ans_group = useFetchapi("http://localhost:3004/group")
    var[msg,setMsg] = useState('');
    const formik = useFormik({
        initialValues: {

            name: '',
     
            mobile: '',
     
            email: ''
     
          },
          validationSchema: Yup.object({

            name: Yup.string().min(2, 'Name Must be 2 or more characters')

              .required('Name Required'),
     
            mobile: Yup.string()
              .required('Mobile Number Required'),
     
            email: Yup.string().email('Invalid email address').required('Email Required'),
     
          }),
          onSubmit: values => {

            // alert(JSON.stringify(values, null, 2));
            var record = JSON.stringify(values);

            var apiPath = process.env.REACT_APP_JSONAPI + '/contact';
            console.log(record);
            console.log(apiPath);

            fetch(apiPath , {
              method: "POST",
              body:record,
              headers:{
                'Content-Type': 'application/json'
              }
            })
            .then(res=>res.json())
            .then(val=>{
              console.log(val);
              setMsg('Contact Added');
            })
     
          }
    });

    var ans_group = useFetchapi1(process.env.REACT_APP_JSONAPI+'/group')
    console.log(ans_group);
  return (
   <Container>
    <h1>Add Contacts</h1>
    <hr/>
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="firstName">Groups</label>
    <select

     id="gid"

     name="gid"

     type="text"

     onChange={formik.handleChange}

     onBlur={formik.handleBlur}
     className='form-control'
    >
      <option value="">Please Select Group</option>
      {
        ans_group && ans_group.length>0 && ans_group.map(({id,groupName})=>
          <option value={id}>{groupName}</option>
        )
      }

    </select>

    <label htmlFor="firstName">Name</label>

<input

  id="name"

  name="name"

  type="text"

  onChange={formik.handleChange}

  onBlur={formik.handleBlur}

  value={formik.values.name}
  className='form-control'

/>
{formik.touched.name && formik.errors.name ? (

<div>{formik.errors.name}</div>

) : null}
<label htmlFor="firstName">Mobile</label>

<input

  id="mobile"

  name="mobile"

  type="text"

  onChange={formik.handleChange}

  onBlur={formik.handleBlur}

  value={formik.values.mobile}
  className='form-control'

/>
{formik.touched.mobile && formik.errors.mobile ? (

<div>{formik.errors.mobile}</div>

) : null}

<label htmlFor="firstName">Email</label>

<input

  id="email"

  name="email"

  type="text"

  onChange={formik.handleChange}

  onBlur={formik.handleBlur}

  value={formik.values.email}
  className='form-control'

/>
{formik.touched.email && formik.errors.email ? (

<div>{formik.errors.email}</div>

) : null}
<br/>
<button type='submit'>Submit</button>
      

    </form>
    {msg}
   </Container>
  )
}
