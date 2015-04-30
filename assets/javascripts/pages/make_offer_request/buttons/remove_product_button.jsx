import { Button, Glyphicon } from 'react-bootstrap'

export default class RemoveProductButton extends React.Component {
  removeProduct() {

  }

  render() {
    return (
      <Button bsStyle='warning'
              onClick={ this.removeProduct.bind(this) } block>
        <Glyphicon glyph='minus' />
      </Button>
    )
  }
}

RemoveProductButton.contextTypes = { flux: React.PropTypes.object };
