import RemoveProductButton from '../buttons/remove_product_button'

import { Input, Row, Col, Well } from 'react-bootstrap'

export default class ProductInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.categories = props.categories.map(
        category => <option value={ category.id } key={ category.id }>{ category.name }</option>
    )
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
            <Input type='number' label='Quantity' />
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

ProductInput.propTypes = { flux: React.PropTypes.object };
