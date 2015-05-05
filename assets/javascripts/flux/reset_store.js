import { Store } from 'flummox'

export default class extends Store {
  constructor(flux) {
    super();
    this.registerActions(flux);
  }

  registerActions(flux) {
    const resetActions = flux.getActionIds('ResetActions');
    this.register(resetActions['resetForm'], this.forceUpdate);
  }
}
