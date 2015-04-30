import { Flummox } from 'flummox'

import ProductsActions from './products_actions'
import ProductsStore   from './products_store'

import ResetActions from './reset_actions'
import ResetStore   from './reset_store'

export default class extends Flummox {
  constructor() {
    super();
    this.createProductsPart();
    this.createResetPart();
  }

  createProductsPart() {
    this.createActions('ProductsActions', ProductsActions);
    this.createStore('ProductsStore',     ProductsStore, this)
  }

  createResetPart() {
    this.createActions('ResetActions', ResetActions);
    this.createStore('ResetStore',     ResetStore, this)
  }
}
