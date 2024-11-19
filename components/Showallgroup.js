import React from 'react'
import useFetchapi1 from '../customhooks/useFetchapi1'
import { useDispatch } from 'react-redux';
import { shareGroupData } from '../reduxcode/slices/librarySlice';
import { Nav } from 'react-bootstrap';


export default function Showallgroup() {
    var ans_lib = useFetchapi1(process.env.REACT_APP_JSONAPI+'/group')
    console.log(ans_lib);

    let dispatch = useDispatch();
    function f1(id){
        dispatch(shareGroupData(id))
    }


  return (
    <div>
        <h4>Groups</h4>
        
        <Nav defaultActiveKey="/home" className='flex-column'>

        {
            ans_lib && ans_lib.length > 0 && ans_lib.map(({id,groupName})=>
                <Nav.Link onClick={()=>{f1(id)}}>{groupName}</Nav.Link>
            )
        }
        </Nav>
    </div>
  )
}
