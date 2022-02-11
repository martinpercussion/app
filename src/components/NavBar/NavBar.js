import logoinsucor from '../logoinsucor.jpg';
import { NavLink } from 'react-bootstrap'
import CartIcon from '../CartIcon';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import {Nav, Navbar} from 'react-bootstrap';



    
function NavBar() {


    return (
      <div className="App">
        <Navbar className="coloring" bg="dark" variant="dark"
          sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand href="/">

          {/* <img src={logoinsucor}  width="110px" height="70px" display= "flex" /> */}

          <h5>INSUCOR{".log"}</h5>
        
            
          </Navbar.Brand>
           
  
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav>               
             

              <Nav.Link href="/categories/pasteleria">Pastelería</Nav.Link>
              <Nav.Link href="/categories/reposteria">Repostería</Nav.Link>
              <Nav.Link href="/categories/chocolates">Chocolates</Nav.Link>

            
            </Nav>
          </Navbar.Collapse>

          <Link to="/cart"><CartIcon /> </Link>

        

          </Navbar>
        <div className="content">
         
        </div>
      </div>
    );
  }

export default NavBar; 