import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { searchCategoryName } from '../reduxcode/slices/searchSlice';
import { Button } from 'bootstrap';

export default function Searchbox() {

    let dispatch = useDispatch();

    var catname = useRef();
    function searchData(){
        var categoryName = catname.current.value;
        console.log(categoryName);
        dispatch(searchCategoryName(categoryName))
    }
  return (
    <div>
        <input type='text' ref={catname} className='form-control'/>
       <button onClick={searchData}>Search</button>
    </div>
  )
}
