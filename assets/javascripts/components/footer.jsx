import React from 'react'

const ReactBootstrap = require('react-bootstrap')
const Navbar         = ReactBootstrap.Navbar
const Nav            = ReactBootstrap.Nav
const NavItem        = ReactBootstrap.NavItem

export default class Footer extends React.Component {
  constructor() {
    super()
    this.API_URL = environment.HOST
  }

  currentYear() {
    return new Date().getFullYear()
  }

  render() {
    return(
      <Navbar fixedBottom>
        <Nav>
          <NavItem href='http://kamil.lelonek.me/'>&copy; {this.currentYear()} Kamil Lelonek</NavItem>
        </Nav>
        <Nav right>
          <NavItem href={this.API_URL}>API</NavItem>
        </Nav>
      </Navbar>
    )
  }
}
