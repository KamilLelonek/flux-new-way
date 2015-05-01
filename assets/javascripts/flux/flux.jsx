import { Flummox } from 'flummox'

import ProductsActions from './products_actions'
import ProductsStore   from './products_store'

import ResetActions from './reset_actions'
import ResetStore   from './reset_store'

import SubmitActions from './submit_actions'
import SubmitStore   from './submit_store'

export default class extends Flummox {
  constructor() {
    super();
    this.createProductsPart();
    this.createResetPart();
    this.createSubmitPart();
  }

  createProductsPart() {
    this.createActions('ProductsActions', ProductsActions);
    this.createStore('ProductsStore',     ProductsStore, this)
  }

  createResetPart() {
    this.createActions('ResetActions', ResetActions);
    this.createStore('ResetStore',     ResetStore, this)
  }

  createSubmitPart() {
    this.createActions('SubmitActions', SubmitActions);
    this.createStore('SubmitStore',     SubmitStore, this)
  }
}
