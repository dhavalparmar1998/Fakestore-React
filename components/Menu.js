
import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


function Menu(){
  var cartCount = useSelector(state=> state.cart.value)

  
    var textdata = useRef();
    let navigate = useNavigate();

    function searchdata(ev){
      ev.preventDefault();
      var textdatavalue = textdata.current.value;
      console.log(textdatavalue);
      navigate("/search-data/" + textdatavalue)
    }
  


    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">CRUD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               {/* <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/login">Login</Link>

              <Link className='nav-link' to="/aboutus">About Us</Link>
              <Link className='nav-link' to="/contactus">Contact Us</Link>
              <Link className='nav-link' to="/effect">UseEffect</Link> */}
              {/* <Link className='nav-link' to="/upcoming">Upcoming</Link>
              <Link className='nav-link' to="/toprated">Top-Rated</Link>
              <Link className='nav-link' to="/popular">Popular</Link>  */}
              <Link className='nav-link' to="/register">Register</Link>
              <Link className='nav-link' to="/login">Login</Link>
              <Link className='nav-link' to="/show-users">Show Users</Link>
              {/* <Link className='nav-link' to="/props-drilling">Parent 1</Link>
              <Link className='nav-link' to="/state-lift">Parent 2</Link> */}
              {/* <Link className='nav-link' to="/country-search">Country-Search</Link>
              <Link className='nav-link' to="/react-redux">Redux</Link> */}
              {/* <Link className='nav-link' to="/fakestore-home">Home</Link>
              <Link className='nav-link' to="/fakestore-electronics/electronics">Electronics</Link>
              <Link className='nav-link' to="/fakestore-electronics/jewelery">Jewelery</Link>
              <Link className='nav-link' to="/fakestore-electronics/men's clothing">Mens</Link>
              <Link className='nav-link' to="/fakestore-electronics/women's clothing">Womens</Link>
              <Link className='nav-link' to="/fakestore-search">Search</Link>
              <Link className='nav-link' to="/fakestore-filter">Filter</Link>
              <Link className='nav-link' to="/cart">Cart({cartCount.length})</Link> */}
               {/* <Link className='nav-link' to ="/send-sms">Send Sms</Link>
               <Link className='nav-link' to ="/add-library1">Add Library</Link>
            <Link className='nav-link' to ="/add-group1">Add Groups</Link>
            <Link className='nav-link' to ="/add-message1">Add Message</Link>
            <Link className='nav-link' to ="/add-contact1">Add Contact</Link> */}
             {/* <Link className='nav-link' to ="/class1">Class1</Link> 
             <Link className='nav-link' to ="/class2">Class2</Link> 
             <Link className='nav-link' to ="/class3">Class3</Link> 
             <Link className='nav-link' to ="/class4">class4</Link> 
             <Link className='nav-link' to ="/class6">Class6</Link> 
             <Link className='nav-link' to ="/class7">class7</Link> 
             <Link className='nav-link' to ="/memo">Memo</Link> 
             <Link className='nav-link' to ="/pure">Pure</Link> 
             <Link className='nav-link' to ="/error">Error Boundary</Link> 
             <Link className='nav-link' to ="/class12">Class 12</Link> 
             <Link className='nav-link' to ="/class13">Class 13</Link>  */}
            {/* <Link className='nav-link' to ="/show-library1">Show Library</Link>
            <Link className='nav-link' to ="/show-group1">Show Group</Link> */}

              {/* <Link className='nav-link' to="/add-user">Register</Link>
              <Link className='nav-link' to="/loginuser">Login</Link> 
               <Link className='nav-link' to="/add-library">Add Library</Link> */}

               {/* <NavDropdown title="Category" id="basic-nav-dropdown">
                <Link className='nav-link' to="category/add">Add</Link>
                <Link className='nav-link' to="category/show">
                  Show
                </Link>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              {/* <form onSubmit={searchdata}>
                <input type='text' ref={textdata}/>
                <button>Search</button>
              </form>  */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Menu;