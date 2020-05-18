import React, { Component } from 'react';

import styles from './MealSurvey.module.css';
import CallToAction from '../../components/CallToAction/CallToAction';

class MealSurvey extends Component {

    render () {
        return (
            <div className={styles.MealSurvey}>
                <div className={styles.Overlay}>
                    <div className="container">
                        <h1 className="display-4 mx-auto text-center">Stay Happy & Confident with Good Health, Great Body & Sound Mind</h1>
                        <CallToAction linkTo="/start-survey"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MealSurvey;