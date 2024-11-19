// import React, { useEffect, useState } from 'react'

// export default function Message() {
//     // var libid = useSelector(state=> state.message.value);
//     // console.log(libid);

//     const[apidata,setapidata] = useState("");

//     // let dispatch = useDispatch();
//     // function f1(data){
//     //     dispatch(sendmessagetotext(data));
//     // }

//     useEffect(()=>{
//         fetch(process.env.REACT_APP_PATH + "/message/"+libid)
//         .then(res=>res.json())
//         .then(val=>{
//             console.log(val);
//             setapidata(val.data)
//         })
//     },[libid])
//   return (
//     <div>
//         <ul>
//             {
//                 apidata && apidata.localeCompare(val=>
//                     <li onClick={()=>{f1(val.message.text)}}>{val.message.text}</li>
//                 )
//             }
//         </ul>
//     </div>
//   )
// }
