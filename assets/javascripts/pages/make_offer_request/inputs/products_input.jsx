import ProductInput from './product_input'

import AddProductButton from '../buttons/add_product_button'

import { Input } from 'react-bootstrap'

export default class ProductsInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setInitialState()
  }

  setInitialState() {
    this.resetStore    = this.context.flux.getStore('ResetStore');
    this.productsStore = this.context.flux.getStore('ProductsStore');
    this.state = { productsIds: this.productsStore.getLastProductIds() }
  }

  componentDidMount() {
    this.productsStore.addListener('change', this.updateProducts.bind(this));
    this.resetStore.addListener('change',    this.resetForm.bind(this));
  }

  componentWillUnmount() {
    this.productsStore.removeListener('change', this.updateProducts.bind(this));
    this.resetStore.removeListener('change',    this.resetForm.bind(this));
  }

  resetForm() {
    this.productsStore.setInitialState()
  }

  validate() {
    return Promise.all(Object.keys(this.refs).map(reference_name => this.refs[reference_name].validate()));
  }

  updateProducts() {
    this.setState({ productsIds: this.productsStore.getLastProductIds() })
  }

  render() {
    const hideRemoveButton = this.state.productsIds.length > 1;
    const products         = this.state.productsIds.map(productId => <ProductInput { ...this.context } key={ productId } ref={ productId } id={ productId } hideRemoveButton={ hideRemoveButton } />);
    return (
      <Input label='Products' wrapperClassName='wrapper'>
        { products }
        <AddProductButton />
      </Input>
    )
  }
}

ProductsInput.contextTypes = {
  categories: React.PropTypes.array,
  flux:       React.PropTypes.object
};

