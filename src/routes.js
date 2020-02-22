import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repositories from './pages/Repositories';

export default function() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} />
                <Route path="/repository" component={Repositories} />
            </Switch>
        </BrowserRouter>
    );
}
