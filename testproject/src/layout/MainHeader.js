import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function MainHeader() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setLoggedInUser(userData.email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setLoggedInUser(null);
     navigate('/login');
  };

  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-row">
            <NavItem className="me-3">
              <Link to="/">Home</Link>
            </NavItem>
            {loggedInUser ? (
              <NavDropdown title={loggedInUser} id="basic-nav-dropdown" className="me-3">
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <NavItem className="me-3">
                  <Link to="/login">Login</Link>
                </NavItem>
                <NavItem className="me-3">
                  <Link to="/Register">Register</Link>
                </NavItem>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;
