import ProductInput from './product_input'

import AddProductButton from '../buttons/add_product_button'

import { Input } from 'react-bootstrap'

export default class ProductsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [<ProductInput />] }
  }

  render() {
    return (
      <Input label='Products' wrapperClassName='wrapper'>
        { this.state.products }
        <AddProductButton />
      </Input>
    )
  }
}

ProductsInput.propTypes = { categories: React.PropTypes.array };
