import RemoveProductButton from '../buttons/remove_product_button'

import { Input, Row, Col, Well } from 'react-bootstrap'

export default class ProductInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.prepareCategories();
    this.setInitialState();
  }

  prepareCategories() {
    this.categories = this.props.categories.map(
        category => <option value={ category.id } key={ category.id }>{ category.name }</option>
    )
  }

  setInitialState() {
    this.state = { value: 1 }
  }

  handleChange() {
    this.setState({
      value: this.refs.quantity.getValue()
    })
  }

  validationState() {
    return this.state.value > 0 ? '' : 'error'
  }

  render() {
    return (
      <Well bsSize='small'>
        <Row>
          <Col xs={5}>
            <Input type='select' label='OZ capacity'>
              { this.categories }
            </Input>
          </Col>
          <Col xs={4}>
            <Input type='number' min='0' value={ this.state.value } label='Quantity' ref='quantity' onChange={ this.handleChange.bind(this) } bsStyle={ this.validationState() } />
          </Col>
          <Col xs={2}>
            <Input label='Remove'>
              <RemoveProductButton { ...this.props }/>
            </Input>
          </Col>
        </Row>
      </Well>
    )
  }
}

ProductInput.propTypes = {
  flux: React.PropTypes.object,
  id: React.PropTypes.number
};
