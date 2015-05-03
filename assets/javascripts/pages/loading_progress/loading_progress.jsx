import { Pager, ProgressBar } from 'react-bootstrap'

export default class LoadingProgres extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setInitialState()
  }

  setInitialState() {
    this.requestStore = this.context.flux.getStore('RequestStore');
  }

  render() {
    console.log(this.requestStore['getStoredRequest']());
    return (
      <Pager>
        <ProgressBar active now={ 100 } bsStyle='success' />
      </Pager>
    )
  }
}

LoadingProgres.willTransitionTo = (transition, element) => {
};

LoadingProgres.contextTypes = { flux: React.PropTypes.object };
