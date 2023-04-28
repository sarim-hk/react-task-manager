import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage'; // import the LoginPage component
import Dashboard from './Dashboard';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <LoginPage />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    );
}

export default Routes;