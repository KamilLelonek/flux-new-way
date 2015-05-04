import { Alert } from 'react-bootstrap'
import { NavItemLink } from 'react-router-bootstrap'

export default class extends React.Component {
  render() {
    return (
      <Alert bsStyle='info'>
        <strong>No offer requests yet!</strong> Go to <NavItemLink className='no-offer-request-link' to='make-offer-request'>make offer requests</NavItemLink> to create one.
      </Alert>
    )
  }
}
