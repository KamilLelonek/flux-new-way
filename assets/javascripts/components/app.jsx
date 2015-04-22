import React  from 'react'
import Router from 'react-router'

const RouteHandler = Router.RouteHandler;

import Navbar from './navbar'
import Footer from './footer'

export default class App extends React.Component {
    render() {
        return (
            <main>
                <Navbar />
                <RouteHandler {...this.props} />
                <Footer />
            </main>
        )
    }
}
