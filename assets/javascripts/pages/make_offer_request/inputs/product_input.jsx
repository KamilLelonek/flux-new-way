import RemoveProductButton from '../buttons/remove_product_button'

import { Input, Row, Col, Well } from 'react-bootstrap'

import reactMixin from 'react-mixin'

export default class ProductInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setInitialState()
  }

  setInitialState() {
    this.prepareCategories();
    this.state = {
      quantity:    1,
      category_id: this.props.categories.first().id
    }
  }

  prepareCategories() {
    this.categories = this.props.categories.map(
        category => <option value={ category.id } key={ category.id }>{ category.name }</option>
    )
  }

  validationState() {
    return this.state.quantity > 0 ? '' : 'error'
  }

  validate() {
    return new Promise(
      (resolve, reject) => {
        if (this.state.quantity > 0) {
          resolve()
        } else {
          reject('You must add at least one product!')
        }
      }
    )
  }

  getProductDetails() {
    return {
      quantity:    this.state.quantity,
      category_id: this.state.category_id
    }
  }

  render() {
    return (
      <Well bsSize='small'>
        <Row>
          <Col xs={5}>
            <Input type='select' label='Size' valueLink={ this.linkState('category_id') }>
              { this.categories }
            </Input>
          </Col>
          <Col xs={4}>
            <Input type='number' label='Quantity' min='0' valueLink={ this.linkState('quantity') } value={ this.state.value } bsStyle={ this.validationState() } />
          </Col>
          <Col xs={2}>
            <RemoveProductButton { ...this.props } />
          </Col>
        </Row>
      </Well>
    )
  }
}

ProductInput.propTypes = {
  flux: React.PropTypes.object,
  id:   React.PropTypes.string
};

reactMixin(ProductInput.prototype, React.addons.LinkedStateMixin);
