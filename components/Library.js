// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';

// export default function Library() {
//     const[apidata,setapidata] = useState("");

//     useEffect(()=>{
//         fetch(process.env.REACT_APP_PATH + "/library/67149fa7d8e79f927ac17f25")
//         .then(res=>res.json())
//         .then(val=>{
//             console.log(val);
//             setapidata(val.data)
//         })
//     },[]);

//     let dispatch = useDispatch();
//     function f1(id){
//         dispatch(getmessagebylibrary(id))
//     }
//   return (
//     <div>
//         <ul>
//             {
//                 apidata && apidata.length > 0 && apidata.localeCompare(val=>
//                     <li onClick={()=>f1(val._id)} value={val._id}>{val.lname}</li>
//                 )
//             }
//         </ul>
//     </div>
//   )
// }
