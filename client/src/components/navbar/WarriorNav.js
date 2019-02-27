import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import React, { Component } from 'react';
import './warriorNav.css';

class WarriorNav extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col id="site-name">
              <NavbarBrand style={{ fontSize: '1.8rem' }}>
                Whiteboard Warriors
              </NavbarBrand>
            </Col>
            <Col>
              <Nav className="float-right">
                <NavItem>
                  <NavLink>Sign In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Join Us</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
        <Container>
          <Navbar expand="md">
            <Nav navbar>
              <NavItem>
                <NavLink href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/community">Community</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/featured">Featured</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/study">Study</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/whiteboarding">Live Practice</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default WarriorNav;
