import { Row, Col, Input, Glyphicon } from 'react-bootstrap'

export default class CompanyInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setInitialState()
  }

  setInitialState() {
    this.resetStore = this.context.flux.getStore('ResetStore');
    this.state = {
      name:    '',
      phone:   '',
      address: ''
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
      name:    '',
      phone:   '',
      address: ''
    })
  }

  handleChange() {
    this.setState({
      name:    this.refs.name.getValue(),
      phone:   this.refs.phone.getValue(),
      address: this.refs.address.getValue()
    })
  }

  validate() {
    return new Promise(
      (resolve, reject) => {
        if (!this.refs['name'].getValue()) {
          reject('Comapny name must be filled!')
        } else if (!this.refs['phone'].getValue()) {
          reject('Company phone must be filled!')
        } else if (!this.refs['address'].getValue()) {
          reject('Company address must be filled!')
        } else {
          resolve()
        }
      }
    )
  }

  getStyle(input) {
    return this.refs[input] ? this.refs[input].getValue().length ? 'success' : 'error' : ''
  }

  render() {
    const iconName    = <Glyphicon glyph='font'     />;
    const iconPhone   = <Glyphicon glyph='earphone' />;
    const iconAddress = <Glyphicon glyph='home'     />;

    return (
      <Input label='Company details' wrapperClassName='wrapper'>
        <Row>
          <Col xs={6}>
            <Input type='text' addonBefore={ iconName  } value={ this.state.name } onChange={ this.handleChange.bind(this) } ref='name' placeholder='Company name' bsStyle={ this.getStyle('name') } />
          </Col>
          <Col xs={6}>
            <Input type='tel' addonBefore={ iconPhone } value={ this.state.phone } onChange={ this.handleChange.bind(this) } ref='phone' placeholder='Company phone' bsStyle={ this.getStyle('phone') } />
          </Col>
        </Row>
        <Input type='text' addonBefore={ iconAddress } value={ this.state.address } onChange={ this.handleChange.bind(this) } ref='address' placeholder='Company address' bsStyle={ this.getStyle('address') } />
      </Input>
    )
  }
}

CompanyInput.contextTypes = { flux: React.PropTypes.object };
