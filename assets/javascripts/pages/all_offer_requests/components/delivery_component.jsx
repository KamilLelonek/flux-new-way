import Delivery from '../../../models/delivery'

export default class DeliveryComponent extends React.Component {
  render() {
    return(
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Customer</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge">{ this.props.delivery.name }</span>
              Name
            </li>
            <li className="list-group-item">
              <span className="badge">{ this.props.delivery.description }</span>
              Description
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

DeliveryComponent.propTypes = { delivery: React.PropTypes.instanceOf(Delivery) };
