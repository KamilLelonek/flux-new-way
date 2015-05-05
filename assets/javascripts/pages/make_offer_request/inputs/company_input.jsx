import { Row, Col, Input, Glyphicon } from 'react-bootstrap'

import reactMixin from 'react-mixin'

export default class CompanyInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setInitialState()
  }

  setInitialState() {
    this.phoneRegex = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    this.resetStore = this.context.flux.getStore('ResetStore');
    this.state = {
      name:    null,
      phone:   null,
      address: null
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
      name:    null,
      phone:   null,
      address: null
    })
  }

  validate() {
    return new Promise(
      (resolve, reject) => {
        if (!this.state.name) {
          reject('Company name must be filled!')
        } else if (!this.state.phone) {
          reject('Company phone must be filled!')
        } else if (!this.state.phone.match(this.phoneRegex)) {
          reject('Company phone must be in a correct format (787-850-3250)!')
        } else if (!this.state.address) {
          reject('Company address must be filled!')
        } else {
          resolve()
        }
      }
    )
  }

  getCompanyDetails() {
    return {
      company_name:    this.state.name,
      company_phone:   this.state.phone,
      company_address: this.state.address
    }
  }

  getStyle(input) {
    return this.state[input] !== null ? this.state[input].length > 0 ? 'success' : 'error' : null
  }

  render() {
    const iconName    = <Glyphicon glyph='font'     />;
    const iconPhone   = <Glyphicon glyph='earphone' />;
    const iconAddress = <Glyphicon glyph='home'     />;

    return (
      <Input label='Company details' wrapperClassName='wrapper'>
        <Row>
          <Col xs={6}>
            <Input type='text' placeholder='Company name' valueLink={ this.linkState('name') } addonBefore={ iconName  }  bsStyle={ this.getStyle('name') } />
          </Col>
          <Col xs={6}>
            <Input type='tel' placeholder='Company phone' valueLink={ this.linkState('phone') } addonBefore={ iconPhone } bsStyle={ this.getStyle('phone') } />
          </Col>
        </Row>
        <Input type='text' placeholder='Company address' valueLink={ this.linkState('address') } addonBefore={ iconAddress } bsStyle={ this.getStyle('address') } />
      </Input>
    )
  }
}

CompanyInput.contextTypes = { flux: React.PropTypes.object };

reactMixin(CompanyInput.prototype, React.addons.LinkedStateMixin);
