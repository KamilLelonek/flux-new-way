import { Pager, ProgressBar } from 'react-bootstrap'

export default class extends React.Component {
  render() {
    return (
      <Pager>
        <ProgressBar active now={ 100 } bsStyle='success' />
      </Pager>
    )
  }
}
