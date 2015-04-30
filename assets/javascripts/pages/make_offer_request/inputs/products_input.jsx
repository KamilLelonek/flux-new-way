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
    this.state = { productsIds: this.productsStore.getLastProductIds() }
  }

  componentDidMount() {
    this.productsStore.addListener('change', this.updateProducts.bind(this));
  }

  componentWillUnmount() {
    this.productsStore.removeListener('change', this.updateProducts.bind(this));
  }

  updateProducts() {
    this.setState({ productsIds: this.productsStore.getLastProductIds() })
  }

  render() {
    const products = this.state.productsIds.map(productId => <ProductInput { ...this.context } key={ productId } id={ productId } />);
    return (
      <Input label='Products' wrapperClassName='wrapper'>
        <React.addons.CSSTransitionGroup transitionName='product'>
          { products }
        </React.addons.CSSTransitionGroup>
        <AddProductButton />
      </Input>
    )
  }
}

ProductsInput.contextTypes = {
  categories: React.PropTypes.array,
  flux:       React.PropTypes.object
};

