import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Pagenotfound from "./components/Pagenotfound";
import App from "./components/App";
import Category from "./components/Category";
import Addcategory from "./components/Addcategory";
import Showcategory from "./components/Showcategory";
import Singleproduct from "./components/Singleproduct";
import Effect from "./components/Effect";
import Upcoming from "./components/Upcoming";
import Toprated from "./components/Toprated";
import Popular from "./components/Popular";
import Searchcomp from "./components/Searchcomp";
import Singlepage from "./components/Singlepage";
import Adduser from "./components/Adduser";
import Addlibrary from "./components/Addlibrary";
import Addmessage from "./components/Addmessage";
import Sendsms from "./components/Sendsms";
import Registercomp from "./components/Registercomp";
import Logincomp from "./components/Logincomp";
import Showuser from "./components/Showuser";
import Edituser from "./components/Edituser";
import Parent1 from "./Parent1";
import Parent2 from "./components/Parent2";
import Countrysearch from "./components/Countrysearch";
import Comp11 from "./components/Comp11";
import Fakestorehome from "./components/Fakestorehome";
import Electronics from "./components/Electronics";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Loginuser from "./components/Loginuser";
import Cart from "./components/Cart";
import Addlibrary1 from "./components/Addlibrary1";
import Addgroup1 from "./components/Addgroup1";
import Addmessage1 from "./components/Addmessage1";
import Addcontact1 from "./components/Addcontact1";
import Sendmessage1 from "./components/Sendmessage1";
import Sendsmstoall from "./components/Sendsmstoall";
import Class1 from "./components/Class1";
import Class2 from "./components/Class2";
import Class3 from "./components/Class3";
import Class4 from "./components/Class4";
import Class5 from "./components/Class5";
import Class6 from "./components/Class6";
import Class7 from "./components/Class7";
import Parent11 from "./components/Parent11";
import Parent21 from "./components/Parent21";
import Comp31 from "./components/Comp31";
import Class12 from "./components/Class12";
import Class13 from "./components/Class13";


  const projectroute = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
          },
        {
            path: "/aboutus",
            element: <About/>
          },
          {
            path: "/contactus",
            element: <Contact/>
          },
          {
            path: "productpage/:productid",
            element: <Singleproduct/>
          },
           
    {
      path: "/effect",
      element: <Effect/>
    },
    {
      path: "/upcoming",
      element: <Upcoming/>
    },
    {
      path: "/toprated",
      element: <Toprated/>
    },
    {
      path: "/popular",
      element: <Popular/>
    },
    {
      path: "/search-data/:txtrecord",
      element: <Searchcomp/>
    },
    {
      path: "single-movie/:movieid",
      element: <Singlepage/>
    },
    {
      path: "add-user",
      element: <Adduser/>
    },
    {
      path: "add-library",
      element: <Addlibrary/>
    },
    {
      path: "add-message",
      element: <Addmessage/>
    },
    {
      path: "send-sms",
      element: <Sendsms/>
    },
    {
      path: "register",
      element: <Registercomp/>
    },
    {
      path: "login",
      element: <Logincomp/>
    },
    {
      path: "loginuser",
      element: <Loginuser/>
    },
    {
      path: "show-users",
      element: <Showuser/>
    },
    {
      path: "props-drilling",
      element: <Parent1/>
    },
    {
      path: "state-lift",
      element: <Parent2/>
    },
    {
      path: "country-search",
      element: <Countrysearch/>
    },
    {
      path: "react-redux",
      element: <Comp11/>
    },
    {
      path: "fakestore-home",
      element: <Fakestorehome/>
    }, {
      path: "fakestore-electronics/:catname",
      element: <Electronics/>
    }, {
      path: "fakestore-search",
      element: <Search/>
    },
     {
      path: "fakestore-filter",
      element: <Filter/>
    },
    {
      path: "cart",
      element: <Cart/>
    },
    {
      path: "edit-user/:userid",
      element: <Edituser/>
    },
    {
      path: "add-message1",
      element: <Addmessage1/>
    },
    {
      path: "add-library1",
      element: <Addlibrary1/>
    },
    {
      path: "add-group1",
      element: <Addgroup1/>
    },
    {
      path: "add-contact1",
      element: <Addcontact1/>
    },
    {
      path: "class1",
      element: <Class1 pname="shirt" price="1000"/>
    },
    {
      path: "class2",
      element: <Class2/>
    },
    {
      path: "class3",
      element: <Class3/>
    },
    {
      path: "class4",
      element: <Class4/>
    },
    {
      path: "class5",
      element: <Class5/>
    },
    {
      path: "class6",
      element: <Class6/>
    },
    {
      path: "class7",
      element: <Class7/>
    },
    {
      path: "memo",
      element: <Parent11/>
    },
    {
      path: "pure",
      element: <Parent21/>
    },
    {
      path: "error",
      element: <Comp31/>
    },
    {
      path: "class12",
      element: <Class12/>
    },
    {
      path: "class13",
      element: <Class13/>
    },
    // {
    //   path: "send-message1",
    //   element: <Sendmessage1/>
    // },
    {
      path: "send-sms",
      element: <Sendsmstoall/>
    },
    
          {
            path:"category",
            element:<Category/>,
            children:[
                {
                    path:"add",
                    element:<Addcategory/>
                },
                {
                    path:"show",
                    element:<Showcategory/>
                }
            ]
          }
        
      ]
    },
   
    
      {
        path: "*",
        element: <Pagenotfound/>
      }
  ]);

  export default projectroute;