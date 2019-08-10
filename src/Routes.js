import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreationZone from './components/CreationZone/CreationZone';
import Login from './components/Login/Login';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/CreationZone' component={CreationZone} />
    </Switch>
);