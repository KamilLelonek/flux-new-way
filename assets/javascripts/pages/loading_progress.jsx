import { Pager, ProgressBar } from 'react-bootstrap'

import postData from '../http_requests/post_data'

export default class LoadingProgres extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setInitialState()
  }

  setInitialState() {
    const requestStore = this.context.flux.getStore('RequestStore');
    this.requestParams = requestStore['getStoredRequest']()
  }

  componentWillMount() {
    if (!this.requestParams) {
      this.context.router.replaceWith('/')
    } else {
      this.makeRequest()
    }
  }

  makeRequest() {
    postData('/offer_requests', this.requestParams)
      .then(() => this.context.router.replaceWith('/'))
  }

  render() {
    return (
      <Pager>
        <ProgressBar active now={ 100 } bsStyle='success' />
      </Pager>
    )
  }
}

LoadingProgres.contextTypes = {
  flux: React.PropTypes.object,
  router: React.PropTypes.func
};
