import * as React from 'react';
import { Route } from 'react-router';

import App from './pages/App';

function createRoutes () {
    const routes = (
        <Route path='/' component={ App }>

        </Route>
    );
    return routes;
}

export default createRoutes;
