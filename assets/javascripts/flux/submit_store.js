import { Store } from 'flummox'

export default class extends Store {
  constructor(flux) {
    super();
    this.registerActions(flux);
  }

  registerActions(flux) {
    const submitActions = flux.getActionIds('SubmitActions');
    this.register(submitActions['submitForm'], this.forceUpdate);
  }
}
