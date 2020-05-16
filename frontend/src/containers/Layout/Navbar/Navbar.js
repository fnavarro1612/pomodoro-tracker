import React from 'react';
import classes from './Navbar.module.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Brand from '../../../components/UI/Brand/Brand';
import NavLinks from '../../../components/UI/NavLinks/NavLinks';
import Aux from '../../../hoc/Aux/Aux';

const NavBar = (props) => (
  <Aux>
    <Navbar className={classes.NavBar} expand="lg">
      <Brand className={classes.Heading} />
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#EDF5E1' }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={classes.Nav}>
          <NavLinks />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Aux>
);

export default NavBar;