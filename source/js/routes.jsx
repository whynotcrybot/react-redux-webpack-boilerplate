import * as React from 'react';
import { Route }  from 'react-router-dom';

import App from './pages/App';

function createRoutes () {
  const routes = (
    <Route exact path='/' component={ App }/>
  );
  return routes;
}

export default createRoutes;
