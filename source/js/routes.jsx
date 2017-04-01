import React                    from 'react';
import { Route, IndexRedirect } from 'react-router-dom';

import App   from './pages/App';
import Home  from './pages/Home';
import About from './pages/About';
import Neko  from './pages/Neko';

function createRoutes () {
  const routes = (
    <div>
      <Route exact path='/' component={ Home } />
      <Route path='/neko' component={ Neko } />
      <Route path='/about' component={ About } />
    </div>
  );
  return routes;
}

export default createRoutes;
