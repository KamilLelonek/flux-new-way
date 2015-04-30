import { Button, Glyphicon } from 'react-bootstrap'

export default class RemoveProductButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.productsActions = props.flux.getActions('ProductsActions')
  }

  removeProduct() {
    this.productsActions['removeProduct'](this.props.id)
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

RemoveProductButton.propTypes = {
  flux: React.PropTypes.object,
  id: React.PropTypes.number
};
