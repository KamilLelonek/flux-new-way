import { Flummox } from 'flummox'

import ProductsActions from './products_actions'
import ProductsStore   from './products_store'

export default class extends Flummox {
  constructor() {
    super();
    this.createActions('ProductsActions', ProductsActions);
    this.createStore('ProductsStore',     ProductsStore, this)
  }
}
