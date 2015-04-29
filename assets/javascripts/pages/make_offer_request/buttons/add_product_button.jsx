import { Button, Glyphicon } from 'react-bootstrap'

export default class extends React.Component {
  addNewProduct() {
  }

  render() {
    return (
      <Button bsStyle='info'
              onClick={ this.addNewProduct.bind(this) }>
        <Glyphicon glyph='plus' />
        &nbsp;Add a new product
      </Button>
    )
  }
}
