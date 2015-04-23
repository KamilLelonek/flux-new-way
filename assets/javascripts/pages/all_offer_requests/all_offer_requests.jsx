import getData      from '../../helpers/get_data'
import OfferRequest from '../../models/offer_request'

export default class AllOfferRequests extends React.Component {
  static fetchData() {
    return getData('/offer_requests');
  }

  componentWillMount() {
    this.props.data['offer-requests'].map(
        offerRequestJsonObject => {
          return OfferRequest.buildFromJson(offerRequestJsonObject.dump)
      }
    )
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

AllOfferRequests.propTypes    = { data: React.PropTypes.object };
AllOfferRequests.defaultProps = { data: { 'offer-requests': [] } };
