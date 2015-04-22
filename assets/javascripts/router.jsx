import React  from 'react'
import Router from 'react-router'

let { Route, DefaultRoute } = Router;
let App = require('./components/app');

export default function () {
    return (
        <Route name="app" path="/" handler={ App }>
            <DefaultRoute name="offer-requests" />
            <Route        name="make-offer-request" />
        </Route>
    )
}
