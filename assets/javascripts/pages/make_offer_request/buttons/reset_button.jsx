import { Button } from 'react-bootstrap'

export default class ResetButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.productsActions = this.context.flux.getActions('ResetActions')
  }

  resetForm() {
    this.productsActions['resetForm']()
  }

  render() {
    return (
      <Button bsStyle='danger'
              onClick={ this.resetForm.bind(this) }>
        Reset
      </Button>
    )
  }
}

ResetButton.contextTypes = { flux: React.PropTypes.object };

