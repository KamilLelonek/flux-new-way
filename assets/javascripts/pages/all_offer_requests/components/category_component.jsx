import Category from '../../../models/category'

export default class CategoryComponent extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Product</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge">{ this.props.category.name }</span>
              Name
            </li>
            <li className="list-group-item">
              <span className="badge">{ this.props.category.ozCapacity }</span>
              OZ capacity
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

CategoryComponent.propTypes = { category: React.PropTypes.instanceOf(Category) };
