import getData               from '../../helpers/get_data'
import OfferRequest          from '../../models/offer_request'
import OfferRequestComponent from './components/offer_request_component'

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

  render() {
    return (
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        { this.offerRequests }
      </div>
    )
  }
}

AllOfferRequests.propTypes    = { data: React.PropTypes.object   };
AllOfferRequests.defaultProps = { data: { 'offer-requests': [] } };
