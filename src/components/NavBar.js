import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="nav-space">
            <a href="/">Dash</a>
          </Navbar.Text>
          <Navbar.Text>
            <div className="nav-space">
            <a href="/assistant">FA</a>
            </div>
          </Navbar.Text>
          <Navbar.Text>
            <div
              className="user-icon"
              style={{
                background: 'black',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'inline-block',
                textAlign: 'center',
                lineHeight: '40px',
                margin: '0px 5px'
              }}
            >
              <div style={ { color: 'white' } }>
              Yo
              </div>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
