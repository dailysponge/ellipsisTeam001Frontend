import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="nav-space">
            <Link to="/">Dash</Link>
          </Navbar.Text>
          <Navbar.Text>
            <div className="nav-space">
              <Link to="/assistant">FA</Link>
            </div>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/dashboard/invest">
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
                <div style={{ color: 'white' }}>Yo</div>
              </div>
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
