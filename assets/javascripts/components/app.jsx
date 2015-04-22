import { RouteHandler } from 'react-router'
import Navbar           from './navbar'
import Footer           from './footer'

export default class extends React.Component {
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
