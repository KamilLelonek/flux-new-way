import { Store } from 'flummox'

export default class ProductsStore extends Store {
  constructor(flux) {
    super();
    this.registerActions(flux);
    this.setInitialState();
  }

  registerActions(flux) {
    const productsActionIds = flux.getActionIds('ProductsActions');
    this.register(productsActionIds['addProduct'],    this.handleAddProduct);
    this.register(productsActionIds['removeProduct'], this.handleRemoveProduct)
  }

  setInitialState() {
    this.state = {
      productsKeys: []
    }
  }

  handleAddProduct(key) {
    this.setState({
      productsKeys: this.state.productsKeys.add(key)
    })
  }

  handleRemoveProduct(key) {
    this.setState({
      productsKeys: this.state.productsKeys.remove(key)
    })
  }
}
