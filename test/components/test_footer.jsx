import React from 'react/addons'

const { TestUtils } = React.addons;

import Footer from '../../assets/javascripts/components/footer'

describe('Footer', () => {
  it('should render footer with current year', () => {
    let footer      = TestUtils.renderIntoDocument(<Footer />);
    let copyright   = TestUtils.findRenderedDOMComponentWithClass(footer, 'current-year');
    let currentYear = new Date().getFullYear();

    expect(copyright.getDOMNode().textContent).to.contain(currentYear)
  })
});
