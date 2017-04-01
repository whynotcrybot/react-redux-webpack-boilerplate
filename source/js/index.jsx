import 'isomorphic-fetch';
import 'babel-polyfill';

import React             from 'react';
import ReactDOM          from 'react-dom';
import {
  createStore, applyMiddleware, compose
}                        from 'redux';
import thunkMiddleWare   from 'redux-thunk';
import { createLogger }  from 'redux-logger';
import rootReducer       from './ducks';
import Root              from './Root';

//
// STORE
//

const middleware = [
  thunkMiddleWare
].concat(process.env.__DEV__ ? [createLogger({collapsed: true})] : []);

const enhancer = compose(
  applyMiddleware(...middleware)
);

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  module.hot.accept('./ducks', () => {
    const nextRootReducer = require('./ducks');
    store.replaceReducer(nextRootReducer);
  });
  return store;
};

const store = configureStore({});

//
// Render
//

function renderApp (RootComponent) {
  ReactDOM.render(
    <RootComponent
      store={store}
    />,
    document.getElementById('root')
  );
}

renderApp(Root);

// if (module.hot) {
//     module.hot.accept(
//         './Root',
//         () => {
//             renderApp(require('./Root').default);
//         }
//     );
// }
