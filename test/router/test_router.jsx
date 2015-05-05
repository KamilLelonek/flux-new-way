import { RouteHandler }  from 'react-router'
import stubRouterContext from './stub_router_context'
const { TestUtils } = React.addons;

import AppRouter from '../../assets/javascripts/components/app'

describe('AppRouter Router', () => {
  let appRouterComponent;

  beforeEach(() => {
    const StubbedAppRouter = stubRouterContext(AppRouter);
    appRouterComponent     = TestUtils.renderIntoDocument(<StubbedAppRouter />)
  });

  it('should render with anchor tags in navigation', () => {
    const links = TestUtils.scryRenderedDOMComponentsWithTag(appRouterComponent, 'a');
    expect(links).to.have.length(4);

    const linkTitles = links.map((link) => link.getDOMNode().textContent);
    expect(linkTitles).to.include('Make offer request');
    expect(linkTitles).to.include('Offer requests');
    expect(linkTitles).to.include('API');
  });

  it('should include <RouterHandler> component', () => {
    const handler = TestUtils.findRenderedComponentWithType(appRouterComponent, RouteHandler);
    expect(handler).to.exist;
  })
});
