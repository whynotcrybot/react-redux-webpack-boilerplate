import React             from 'react';
import { Switch, Route } from 'react-router-dom';

import App       from './pages/App';
import Home      from './pages/Home';
import About     from './pages/About';
import Neko      from './pages/Neko';
import Counter   from './pages/Counter';
import NotFound  from './pages/NotFound';

function createRoutes () {
  const routes = (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/neko' component={ Neko } />
      <Route path='/about' component={ About } />
      <Route path='/counter' component={ Counter } />

      <Route path='*' component={ NotFound } />
    </Switch>
  );
  return routes;
}

export default createRoutes;
