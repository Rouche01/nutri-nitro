import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Survey from '../../components/Survey/Survey';
import EmailInfo from '../../components/Survey/EmailInfo/EmailInfo';


class RouteManager extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path='/survey/email' exact component={EmailInfo} />
                <Route path='/start-survey' exact component={Survey} />
                <Route path='/' exact component={HomePage} />
            </React.Fragment>
        );
    }
}

export default RouteManager;