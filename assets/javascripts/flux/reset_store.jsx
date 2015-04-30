import { Store } from 'flummox'

export default class ResetStore extends Store {
  constructor(flux) {
    super();
    this.registerActions(flux);
  }

  registerActions(flux) {
    const resetActions = flux.getActionIds('ResetActions');
    this.register(resetActions['resetForm'], this.forceUpdate);
  }
}
