import { Alert } from 'react-bootstrap'

export default class ValidationAlert extends React.Component {
  render() {
    return(
      <Alert bsStyle='danger'>
        <h4>Validation error</h4>
        <p>{ this.props.alertMessage }</p>
      </Alert>
    )
  }
}

ValidationAlert.propTypes = { alertMessage: React.PropTypes.string }
