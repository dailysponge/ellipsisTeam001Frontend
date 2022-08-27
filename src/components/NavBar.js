import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div>
      <NavBar className='navbar' sticky='top'>
          <Container className='navbar-container'>
            <Navbar.Brand as={Link} to="/api/v1/home">
              <div className='navbar-brand'>Logo</div>
            </Navbar.Brand>

            <Nav.Item>
              <>Dash<>
            </Nav.Item>
          </Container>
      </NavBar>
    </div>
  )
}

export default NavBar