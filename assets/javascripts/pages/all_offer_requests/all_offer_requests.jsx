import getData from '../../helpers/get_data'

export default class AllOfferRequests extends React.Component {
  static fetchData() {
    return getData('/offer_requests');
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
