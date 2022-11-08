import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path='/' component={Login} exact={true}/>
                    <Route path='/register' component={Register}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};