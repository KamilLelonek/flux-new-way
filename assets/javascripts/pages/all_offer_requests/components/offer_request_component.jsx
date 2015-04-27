import OfferRequest from '../../../models/offer_request'

import CompanyComponent  from './company_component'
import CustomerComponent from './customer_component'
import DeliveryComponent from './delivery_component'
import ProductsComponent from './products_component'

export default class OfferRequestComponent extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading"
             role="tab"
             id={ this.props.id }>
          <h4 className="panel-title">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href={"#collapse" + this.props.id }
              aria-expanded="false"
              aria-controls={"collapse" + this.props.id }>
              Offer request id: { this.props.id }
            </a>
          </h4>
        </div>
        <div id={"collapse" + this.props.id }
             className="panel-collapse collapse in"
             role="tabpanel"
             aria-labelledby={ this.props.id }>
          <CompanyComponent  company ={ this.props.offerRequest.company  } />
          <CustomerComponent customer={ this.props.offerRequest.customer } />
          <DeliveryComponent delivery={ this.props.offerRequest.delivery } />
          <ProductsComponent products={ this.props.offerRequest.products } />
        </div>
      </div>
    )
  }
}

OfferRequestComponent.propTypes = { offerRequest: React.PropTypes.instanceOf(OfferRequest) };
