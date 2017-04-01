import * as React from 'react';

import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route
}                   from 'react-router-dom';
import { Store }    from 'redux';
import createRoutes from './routes';

import '../style/index.global.css';

class Root extends React.Component{
    render () {
        return (
            <Provider store={this.props.store}>
              <Router>
                {createRoutes()}
              </Router>
            </Provider>
        );
    }
};

export default Root;
