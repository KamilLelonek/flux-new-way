import { Route, DefaultRoute } from 'react-router'
import App                     from './components/app'

export default (
    <Route name="app" path="/" handler={ App }>
        <DefaultRoute name="offer-requests" />
        <Route name="make-offer-request" />
    </Route>
)
