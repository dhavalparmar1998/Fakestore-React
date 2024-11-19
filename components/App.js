import { ToastContainer } from "react-bootstrap";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Footer from './Footer';
import Menu from "./Menu";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addRecordInCartPageLoad } from "../reduxcode/slices/cartSlice";


export default function App(){
    let dispatch = useDispatch();
    useEffect(()=>{
        var ansStorage = localStorage.getItem('cartRecord');
        console.log("App");
        console.log(ansStorage);

        if(ansStorage!==null){
            var recordToDispatch = JSON.parse(ansStorage);
            console.log(recordToDispatch);
            dispatch(addRecordInCartPageLoad(recordToDispatch))
        }
    },[])
    return(
        
<>      <ToastContainer/>
        <Menu />
        <Outlet />
        <Footer />
        </>
    )
}



