import React, { Component, PropTypes } from 'react';


export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <div className='Page'>
          <p>Hello world!</p>
          { children }
        </div>
      </div>
    );
  }
}
