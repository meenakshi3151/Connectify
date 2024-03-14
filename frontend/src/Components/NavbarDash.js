import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter} from "react-router-dom";
import { HashLink as Link} from 'react-router-hash-link';


function NavbarDash() {
  const [myStyle,setmyStyle] = useState({
     color:'#222',
     backgroundColor: 'white',
     transition: 'all 0.3s ease',
     
  })

   const [btntext, setbtntext] = useState("Enable Dark mode");

  const toggleStyle =  () =>{
         if(myStyle.color === '#222'){
              setmyStyle({
                 color: 'white',
                 backgroundColor : '#222',
                 transition: 'all 0.3s ease',
                
              })
               
              setbtntext("Enable Light mode")
            }
              else{
                setmyStyle({
                   color : '#222',
                   backgroundColor : 'white',
                   transition: 'all 0.3s ease'

                })
                setbtntext("Enable Dark Mode")
              }
         }
  
 
  return (
  
    <Navbar expand="lg"   style={myStyle}>
      <Container fluid >
        <Navbar.Brand href="#" style={myStyle}>Connectify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={myStyle}>Explore</Nav.Link>
            <Link to ="/notifications">
            <Nav.Link href="NotificationPage.js" style={myStyle}>Notifications</Nav.Link>
            </Link>
            <Link to ="#about">
            <Nav.Link href="AboutUs.js" style={myStyle}>Add</Nav.Link>
            </Link>
            
            <Link to = "#">
            <Nav.Link href="Dashboard.js" style={myStyle}>Your Profile</Nav.Link>
            </Link>
          </Nav>
          
          <button onClick = {toggleStyle} type="button" style = {{backgroundColor:"blue"}}class="btn btn-primary mx-4">{btntext}</button>
             <Link to = "#login">
             <Button variant="outline-success" href = "Login.js">Logout</Button>
             </Link>     
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default NavbarDash;