import { Row, Col, Input, Glyphicon } from 'react-bootstrap'

import reactMixin from 'react-mixin'

export default class CustomerInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setInitialState()
  }

  setInitialState() {
    this.emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    this.resetStore = this.context.flux.getStore('ResetStore');
    this.state = {
      name:  null,
      email: null
    }
  }

  componentDidMount() {
    this.resetStore.addListener('change', this.resetForm.bind(this));
  }

  componentWillUnmount() {
    this.resetStore.removeListener('change', this.resetForm.bind(this));
  }

  resetForm() {
    this.setState({
      name:  null,
      email: null
    })
  }

  validate() {
    return new Promise(
      (resolve, reject) => {
        if (!this.state.name) {
          reject('Customer name must be filled!')
        } else if (!this.state.email) {
          reject('Customer email must be filled!')
        } else if (!this.state.email.match(this.emailRegex)) {
          reject('Customer email must in a correct format (email@example.com)!')
        } else {
          resolve();
        }
      }
    )
  }

  getCustomerDetails() {
    return {
      customer_name:  this.state.name,
      customer_email: this.state.email
    }
  }

  getStyle(input) {
    return this.state[input] !== null ? this.state[input].length > 0 ? 'success' : 'error' : null
  }

  render() {
    const iconName  = <Glyphicon glyph='user'     />;
    const iconEmail = <Glyphicon glyph='envelope' />;

    return (
      <Input label='Customer details' wrapperClassName='wrapper'>
        <Row>
          <Col xs={6}>
            <Input type='text' placeholder='Customer name' valueLink={ this.linkState('name') } addonBefore={ iconName } bsStyle={ this.getStyle('name') } />
          </Col>
          <Col xs={6}>
            <Input type='text' placeholder='Customer email' valueLink={ this.linkState('email') } addonBefore={ iconEmail } bsStyle={ this.getStyle('email') } />
          </Col>
        </Row>
      </Input>
    )
  }
}

CustomerInput.contextTypes = { flux: React.PropTypes.object };

reactMixin(CustomerInput.prototype, React.addons.LinkedStateMixin);

