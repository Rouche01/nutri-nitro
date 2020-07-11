import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Survey from '../../components/Survey/Survey';
import EmailInfo from '../../components/Survey/EmailInfo/EmailInfo';
import PredictWeightStatus from '../../components/SectionBreaker/PredictWeightStatus/PredictWeightStatus';


class RouteManager extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path='/survey/email' exact component={EmailInfo} />
                <Route path='/survey' exact component={Survey} />
                <Route path='/predict-weight' exact component={PredictWeightStatus} />
                <Route path='/' exact component={HomePage} />
            </React.Fragment>
        );
    }
}

export default RouteManager;