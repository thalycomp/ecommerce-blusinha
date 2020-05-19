import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart/index';
import Home from './pages/Home/index';
import Details from './pages/Details/index';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Cart" exact component={Cart} />
            <Route path="/Details/:id" exact component={Details} />
        </Switch>
    );
}
