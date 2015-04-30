import { Row, Col, Input, Glyphicon } from 'react-bootstrap'

export default class CustomerInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setInitialState()
  }

  setInitialState() {
    this.resetStore = this.context.flux.getStore('ResetStore');
    this.state = {
      name:  '',
      email: ''
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
      name:  '',
      email: ''
    })
  }

  handleChange() {
    this.setState({
      name:  this.refs.name.getValue(),
      email: this.refs.email.getValue()
    })
  }

  render() {
    const iconName  = <Glyphicon glyph='user'     />;
    const iconEmail = <Glyphicon glyph='envelope' />;

    return (
      <Input label='Customer details' wrapperClassName='wrapper'>
        <Row>
          <Col xs={6}>
            <Input type='text' addonBefore={ iconName  } value={ this.state.name } onChange={ this.handleChange.bind(this) } ref='name' placeholder='Customer name' />
          </Col>
          <Col xs={6}>
            <Input type='text' addonBefore={ iconEmail } value={ this.state.email } onChange={ this.handleChange.bind(this) } ref='email' placeholder='Customer email' />
          </Col>
        </Row>
      </Input>
    )
  }
}

CustomerInput.contextTypes = { flux: React.PropTypes.object };
