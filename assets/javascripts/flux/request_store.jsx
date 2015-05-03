import { Store } from 'flummox'

export default class extends Store {
  constructor(flux) {
    super();
    this.registerActions(flux);
    this.setInitialState()
  }

  registerActions(flux) {
    const submitActionsIds = flux.getActionIds('RequestActions');
    this.register(submitActionsIds['storeRequest'], this.handleStoreRequest);
  }

  setInitialState() {
    this.setState({
      requests: []
    })
  }

  handleStoreRequest(request) {
    this.setState({
      requests: this.state.requests.add(request)
    })
  }

  getStoredRequest() {
    return this.state.requests.shift()
  }
}
