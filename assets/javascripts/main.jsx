import 'bootstrap-webpack'
import 'whatwg-fetch'
import 'babel-core/polyfill'
import 'sugar'
import '../stylesheets/main.sass'

let fetchData = routes => {
  let data = {};

  return Promise.all(
    routes
      .filter(route => route.handler.fetchData)
      .map(
        route => route.handler.fetchData()
        .then(response => data[route.name] = response)
    )
  ).then(() => data)
};

import router from './router'

router.run((Handler, state) =>
    fetchData(state.routes)
      .then(data => React.render(<Handler data={ data } />, document.body))
);
