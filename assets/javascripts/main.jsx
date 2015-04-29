import 'bootstrap-webpack'
import 'whatwg-fetch'
import 'babel-core/polyfill'
import 'sugar'
import '../stylesheets/main.sass'

import fetchData     from './helpers/fetch_data'
import router        from './router'
import Flux          from './flux/flux'
import FluxComponent from 'flummox/component'

router.run((Handler, state) =>
    fetchData(state.routes)
      .then(data => {
        React.withContext(
          { flux: new Flux() },
          () => React.render(<Handler data={ data } />, document.body)
        )
      })
);
