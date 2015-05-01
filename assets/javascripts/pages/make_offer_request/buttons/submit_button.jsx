import { Button } from 'react-bootstrap'

export default class SubmitButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.submitActions = this.context.flux.getActions('SubmitActions')
  }

  submitForm() {
    this.submitActions['submitForm']()
  }

  render() {
    return (
      <Button bsStyle='success'
              onClick={ this.submitForm.bind(this) }>
        Submit
      </Button>
    )
  }
}

SubmitButton.contextTypes = { flux: React.PropTypes.object };
