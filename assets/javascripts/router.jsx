import React  from 'react'
import Router from 'react-router'

let { Route, DefaultRoute, RouteHandler, Link } = Router

import Navbar from './components/navbar'
import Footer from './components/footer'

export default class AppRouter extends React.Component {
  static getRoutes() {
    return (
      <Route name='app' path='/' handler={ AppRouter }></Route>
    )
  }

  render() {
    return (
      <main>
        <Navbar/>
        <RouteHandler {...this.props} />
        <Footer/>
      </main>
    )
  }
}
