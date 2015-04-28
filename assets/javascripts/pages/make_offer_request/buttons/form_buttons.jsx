import SubmitButton from './submit_button'
import ResetButton  from './reset_button'

import { ButtonGroup, Pager } from 'react-bootstrap'

export default class extends React.Component {
  render() {
    return (
      <Pager>
        <ButtonGroup bsSize='large'>
          <ResetButton  />
          <SubmitButton />
        </ButtonGroup>
      </Pager>
    )
  }
}
