import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreationZone from './components/CreationZone/CreationZone';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProfilePage from './components/UserPage/ProfilePage';
import DefaultWorkout from './components/CreationZone/DefaultWorkout';

export default (
    <Switch>
        <Route exact path='/' component={Register} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/ProfilePage' component={ProfilePage} />
        <Route exact path='/CreationZone' component={CreationZone} />
        <Route exact path='/Workout/:id' component={DefaultWorkout} />
        <Route path='*' render={() => { return <div> You are trying to visit a page that does not exist. </div> }} />
    </Switch>
);