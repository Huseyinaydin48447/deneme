import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
function MainHeader({ loggedInUser }) {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-row"> {/* flex-row sınıfını ekleyerek menü öğelerini yatay olarak sırala */}
            <NavItem className="me-3">
              <Link to="/">Home</Link>
            </NavItem>
            {loggedInUser ? (<NavItem className="me-3"><span>{loggedInUser}</span>

            </NavItem>
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
