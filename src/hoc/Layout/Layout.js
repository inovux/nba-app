import React, { Component } from 'react';
import './Layout.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
  state = {
    showNav: false
  };

  toggleSidenav = action => {
    this.setState({
      showNav: action
    });
  };

  render() {
    return (
      <div>
        <Header
          user={this.props.user}
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSidenav(false)}
          onOpenNav={() => this.toggleSidenav(true)}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
