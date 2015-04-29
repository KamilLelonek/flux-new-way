import { Button, Glyphicon } from 'react-bootstrap'

export default class AddProductButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.productsActions = this.context.flux.getActions('ProductsActions')
  }

  addNewProduct() {
    this.productsActions['addProduct']()
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

AddProductButton.contextTypes = { flux: React.PropTypes.object.isRequired };
