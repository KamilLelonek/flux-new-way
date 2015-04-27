import Customer from '../../../models/customer'

export default class CustomerComponent extends React.Component {
  render() {
    return(
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Customer</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge">{ this.props.customer.name }</span>
              Name
            </li>
            <li className="list-group-item">
              <span className="badge">{ this.props.customer.email }</span>
              Email
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

CustomerComponent.propTypes = { customer: React.PropTypes.instanceOf(Customer) };
