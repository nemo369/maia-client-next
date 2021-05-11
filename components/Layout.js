import React, { Component } from 'react';
import NavBar from './NavBar';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <NavBar />
        {children}
      </div>
    );
  }
}
export default Layout