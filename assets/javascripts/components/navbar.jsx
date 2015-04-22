import React  from 'react'

const ReactBootstrap = require('react-bootstrap');
const Navbar         = ReactBootstrap.Navbar;
const Nav            = ReactBootstrap.Nav;
const NavItemLink    = require('react-router-bootstrap').NavItemLink;

export default class AppNavbar extends React.Component {
  render() {
    return(
      <Navbar brand='Flux New Way' inverse fixedTop>
        <Nav right>
          <NavItemLink to="offer-requests">Offer requests</NavItemLink>
          <NavItemLink to="make-offer-request">Make offer request</NavItemLink>
        </Nav>
      </Navbar>
    )
  }
}
