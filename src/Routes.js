import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreationZone from './components/CreationZone/CreationZone';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserPage from './components/UserPage/UserPage';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/UserPage' component={UserPage} />
        <Route exact path='/CreationZone' component={CreationZone} />
        <Route path='*' render={() => {return <div> You are trying to visit a page that does not exist. </div>}} />
    </Switch>
);