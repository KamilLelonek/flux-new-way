import { Pager, ProgressBar } from 'react-bootstrap'

export default class LoadingProgres extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setInitialState()
  }

  componentWillMount() {
    if(!this.requestParams) {
      this.context.router.replaceWith('/')
    }
  }

  setInitialState() {
    const requestStore  = this.context.flux.getStore('RequestStore');
    this.requestParams  = requestStore['getStoredRequest']()
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
  flux:   React.PropTypes.object,
  router: React.PropTypes.func
};
