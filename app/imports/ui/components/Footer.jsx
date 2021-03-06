import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = {
      padding: '40px 0 40px 0',
      color: 'white',
    };
    return (
        <footer as="footer4">
          <div style={divStyle} className="ui center aligned container">
            <p>Hawaii Covid Convo team</p>
            <p>Glen Larita, Sydney Dempsey, Daniel Nilo, Brian Abad</p>
          </div>
        </footer>
    );
  }
}

export default Footer;
