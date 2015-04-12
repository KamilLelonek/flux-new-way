import React  from 'react';
import Router from 'react-router';

let { Route, DefaultRoute, RouteHandler, Link } = Router;

export default class AppRouter extends React.Component {
  static getRoutes() {
    return (
      <Route name='app' path='/' handler={ AppRouter }></Route>
    );
  }

  render() {
    return (
      <div id='container'>
        <main>
          <RouteHandler {...this.props} />
        </main>
      </div>
    );
  }
};
