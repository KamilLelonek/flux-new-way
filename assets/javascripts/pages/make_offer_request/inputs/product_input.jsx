import RemoveProductButton from '../buttons/remove_product_button'

import { Input, Row, Col, Well } from 'react-bootstrap'

export default class ProductInput extends React.Component {
  render() {
    const categories = this.props.categories.map(
        category => <option value={ category.id } key={ category.id }>{ category.name }</option>
    );

    return (
      <Well bsSize='small'>
        <Row>
          <Col xs={5}>
            <Input type='select' label='OZ capacity'>
              { categories }
            </Input>
          </Col>
          <Col xs={4}>
            <Input type='number' label='Quantity' />
          </Col>
          <Col xs={2}>
            <Input label='Remove'>
              <RemoveProductButton />
            </Input>
          </Col>
        </Row>
      </Well>
    )
  }
}

ProductInput.contextTypes = { flux: React.PropTypes.object.isRequired };
