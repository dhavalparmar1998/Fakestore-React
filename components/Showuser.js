import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Showuser() {
  var[api, setapi] = useState([]);

  useEffect(()=>{
    var apipath = process.env.REACT_APP_JSONAPI+'/users';
    fetch(apipath,{
      method: 'GET'
    })
    .then(res=>res.json())
    .then(val=>{
      console.log(val);
      setapi(val);
    })
  },[]);

  function deletedata(ev,id){
    console.log(ev);
    console.log(id);
    var apipath = process.env.REACT_APP_JSONAPI+'/users/'+id;
    console.log(apipath);
    fetch(apipath,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(val=>{
      console.log(val);
     ev.target.parentNode.parentNode.remove();
    })

  }
  return (
   <Container>
    <h1>Show Data</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          api && api.length > 0 && api.map(({name,email,mobile,id})=>
            <tr>
              <td>{name}</td>
              <td>{mobile}</td>
              <td>{email}</td>
              <td>
                <Link to={"/edit-user/"+id}>Edit</Link>
              </td>
              <td>
                <Link onClick={(ev)=>{deletedata(ev,id)}}>Delete</Link>
              </td>
            </tr>
          )
        }
      </tbody>
      
      </Table>
   </Container>
  )
}
