import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart/index';
import Home from './pages/Home/index';
import Details from './pages/Details/index';
import LovedIt from './pages/LovedIt/index';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Cart" exact component={Cart} />
            <Route path="/LovedIt" component={LovedIt} />
            <Route path="/Details/:id" exact component={Details} />
        </Switch>
    );
}
