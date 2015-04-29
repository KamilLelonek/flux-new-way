import { Button, Glyphicon } from 'react-bootstrap'

export default class extends React.Component {
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
