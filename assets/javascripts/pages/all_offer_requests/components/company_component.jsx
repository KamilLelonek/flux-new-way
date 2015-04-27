import Company from '../../../models/company'

export default class CompanyComponent extends React.Component {
  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Company</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge">{ this.props.company.name }</span>
              Name
            </li>
            <li className="list-group-item">
              <span className="badge">{ this.props.company.phone }</span>
              Phone
            </li>
            <li className="list-group-item">
              <span className="badge">{ this.props.company.address }</span>
              Address
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

CompanyComponent.propTypes = { company: React.PropTypes.instanceOf(Company) };
