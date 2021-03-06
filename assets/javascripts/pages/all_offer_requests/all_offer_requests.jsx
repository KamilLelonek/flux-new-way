import getData                  from '../../http_requests/get_data'
import OfferRequest             from '../../models/offer_request'
import OfferRequestComponent    from './components/offer_request_component'
import NoOfferRequestsComponent from './components/no_offer_requests_components'

import jQuery from 'jquery'

export default class AllOfferRequests extends React.Component {
  static fetchData() {
    return getData('/offer_requests');
  }

  componentWillMount() {
    this.offerRequests = (this.props.data['offer-requests'] || []).map(
        offerRequestJsonObject => {
          const offerRequest = OfferRequest.buildFromJson(offerRequestJsonObject.dump);
          return <OfferRequestComponent key={ offerRequest.id } id={ offerRequest.id } offerRequest={ offerRequest } />
      }
    )
  }

  componentDidMount() {
    jQuery('.collapse').collapse()
  }

  render() {
    return (
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        { this.offerRequests.length ? this.offerRequests : <NoOfferRequestsComponent /> }
      </div>
    )
  }
}

AllOfferRequests.propTypes    = { data: React.PropTypes.object   };
AllOfferRequests.defaultProps = { data: { 'offer-requests': [] } };
