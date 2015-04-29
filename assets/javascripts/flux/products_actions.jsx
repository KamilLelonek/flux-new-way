import { Actions } from 'flummox'
import uuid from 'node-uuid'

export default class extends Actions {
  addProduct() {
    return { key: uuid.v4() }
  }

  removeProduct(key) {
    return { key: key }
  }
}
