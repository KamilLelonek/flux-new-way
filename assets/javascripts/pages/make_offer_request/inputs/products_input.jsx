import ProductInput from './product_input'

import AddProductButton from '../buttons/add_product_button'

import { Input } from 'react-bootstrap'

export default class ProductsInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setInitialState();
  }

  setInitialState() {
    this.productsStore = this.context.flux.getStore('ProductsStore');
    this.state = { products: [<ProductInput { ...this.context } key='0' />] }
  }

  componentDidMount() {
    this.productsStore.addListener('change', this.addNewProduct.bind(this));
  }

  componentWillUnmount() {
    this.productsStore.removeListener('change', this.addNewProduct.bind(this));
  }

  addNewProduct() {
    this.setState(
      React.addons.update(this.state, {
        products: { $push: [<ProductInput { ...this.context } />] }
      })
    )
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

ProductsInput.contextTypes = {
  categories: React.PropTypes.array,
  flux:       React.PropTypes.object.isRequired
};

