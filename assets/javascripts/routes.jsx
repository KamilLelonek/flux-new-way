import { Route, DefaultRoute } from 'react-router'
import App                     from './components/app'
import AllOfferRequests        from './pages/all_offer_requests/all_offer_requests'

export default (
  <Route name='app' path='/' handler={ App }>
    <DefaultRoute name='offer-requests' handler={ AllOfferRequests } />
    <Route name='make-offer-request' />
  </Route>
)
