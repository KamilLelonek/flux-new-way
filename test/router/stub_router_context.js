// Used to stub various `this.context.router` functions for testing

import React from 'react'

export default (Component, props, stubs) => {
  const RouterStub = Object.assign({
    getRouteAtDepth()          {},
    setRouteComponentAtDepth() {},
    makePath()                 {},
    makeHref()                 {},
    transitionTo()             {},
    replaceWith()              {},
    goBack()                   {},
    getCurrentPath()           {},
    getCurrentRoutes()         {},
    getCurrentPathname()       {},
    getCurrentParams()         {},
    getCurrentQuery()          {},
    isActive()                 {}
  }, stubs);

  return React.createClass({
    childContextTypes: {
      router:     React.PropTypes.func,
      routeDepth: React.PropTypes.number
    },

    getChildContext() {
      return {
        router:     RouterStub,
        routeDepth: 1
      }
    },

    render() {
      return <Component { ...props } />
    }
  })
}
