import { Navbar, Nav } from 'react-bootstrap'
import { NavItemLink } from 'react-router-bootstrap'

export default class extends React.Component {
  render() {
    return (
      <Navbar brand='Flux New Way' inverse fixedTop>
        <Nav right>
          <NavItemLink to="offer-requests">Offer requests</NavItemLink>
          <NavItemLink to="make-offer-request">Make offer request</NavItemLink>
        </Nav>
      </Navbar>
    )
  }
}
