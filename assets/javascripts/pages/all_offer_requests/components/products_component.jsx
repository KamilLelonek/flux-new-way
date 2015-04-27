import ProductComponent from './product_component'

export default class ProductsComponent extends React.Component {
  componentWillMount() {
    this.products = this.props.products.map(product =>
        <ProductComponent product={ product } />
    )
  }

  render() {
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Products</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            { this.products }
          </ul>
        </div>
      </div>
    )
  }
}

ProductsComponent.propTypes = { products: React.PropTypes.array };
