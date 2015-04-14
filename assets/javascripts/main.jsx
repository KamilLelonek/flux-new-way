require('bootstrap-webpack')
require('whatwg-fetch')

import 'babel-core/polyfill'

import React  from 'react'
import Router from 'react-router'

let fetchData = function(routes, params) {
  let data = {}

  return Promise.all(
    routes
      .filter(route => route.handler.fetchData)
      .map(route => {
        return route.handler.fetchData(params).then(resp => {
          data[route.name] = resp
        })
      })
  ).then(() => data)
}

import AppRouter from "./router"

Router.run(AppRouter.getRoutes(), Router.HistoryLocation, function(Handler, state) {
  fetchData(state.routes, state.params).then(data => {
    React.render(<Handler data={data} />, document.body)
  })
})
