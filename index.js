import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './css/style.css';
import App from './components/App';
import projectroute from "./projectroute";


import {
   
    RouterProvider
  } from "react-router-dom";
import { Provider } from "react-redux";
import mystore from "./reduxcode/mystore";


ReactDOM
.createRoot(document.getElementById("root"))
.render(
  <Provider store={mystore}>
    <RouterProvider router={projectroute} />
  </Provider>
);
