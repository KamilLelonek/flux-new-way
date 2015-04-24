import { RouteHandler } from 'react-router'
import Navbar           from './navbar'
import Footer           from './footer'

export default class extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <section className="app container">
          <RouteHandler {...this.props} />
        </section>
        <Footer />
      </main>
    )
  }
}
