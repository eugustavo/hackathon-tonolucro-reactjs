import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Market from './pages/Market';
import Marketview from './pages/Marketview';
import Marketmaps from './pages/Marketmaps';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/market" component={Market} />
                <Route path="/marketview" component={Marketview} />
                <Route path="/marketmaps" component={Marketmaps} />
            </Switch>
        </BrowserRouter>
    );
}