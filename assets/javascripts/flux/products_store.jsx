import { Store } from 'flummox'
import uuid from 'node-uuid'

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

  getLastProductIds() {
    return this.state.productsKeys
  }

  setInitialState() {
    this.setState({
      productsKeys: [uuid.v4()]
    })
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
