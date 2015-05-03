import { Button, Glyphicon, Input } from 'react-bootstrap'

export default class RemoveProductButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.productsActions = props.flux.getActions('ProductsActions')
  }

  removeProduct() {
    this.productsActions['removeProduct'](this.props.id)
  }

  render() {
    if(!this.props.hideRemoveButton) return null;

    return (
      <Input label='Remove'>
        <Button bsStyle='warning'
                onClick={ this.removeProduct.bind(this) } block>
          <Glyphicon glyph='minus' />
        </Button>
      </Input>
    )
  }
}

RemoveProductButton.propTypes = {
  flux:             React.PropTypes.object,
  id:               React.PropTypes.string,
  hideRemoveButton: React.PropTypes.bool
};
