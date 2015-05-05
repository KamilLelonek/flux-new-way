import 'bootstrap-webpack'
import 'whatwg-fetch'
import 'babel-core/polyfill'
import 'sugar'
import '../stylesheets/main.sass'

import fetchData from './http_requests/fetch_data'
import router    from './router'
import Flux      from './flux/flux'

const flux = new Flux();

router.run((Handler, state) =>
    fetchData(state.routes)
      .then(data => {
        React.withContext(
          { flux: flux },
          () => React.render(<Handler data={ data } />, document.body)
        )
      })
);
