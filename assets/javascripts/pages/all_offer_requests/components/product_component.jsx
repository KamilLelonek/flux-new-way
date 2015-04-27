import Product from '../../../models/product'

import CategoryComponent from './category_component'

export default class ProductComponent extends React.Component {
  render() {
    return(
      <ul className="list-group">
        <CategoryComponent category={ this.props.product.category } />
        <li className="list-group-item">
          <span className="badge">{ this.props.product.quantity }</span>
          Quantity
        </li>
      </ul>
    )
  }
}

ProductComponent.propTypes = { product: React.PropTypes.instanceOf(Product) };
