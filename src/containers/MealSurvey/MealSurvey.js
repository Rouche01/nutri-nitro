import React, { Component } from 'react';

import styles from './MealSurvey.module.css';
import CallToAction from '../../components/CallToAction/CallToAction';
import Survey from '../../components/Survey/Survey';
import Wrapper from '../../hoc/Wrapper/Wrapper';

class MealSurvey extends Component {
    state = {
        surveyState: false,
    }

    surveyStartHandler = () => {
        this.setState({
            surveyState: true,
        })
    }

    closeSurveyState = () => {
        this.setState({
            surveyState: false,
        })
    }

    render () {
        return (
            <Wrapper>
            { this.state.surveyState ? <Survey closeHandler={this.closeSurveyState} /> : null }
            <div className={styles.MealSurvey}>
                <div className={styles.Overlay}>
                    <div className="container">
                        <h1 className="display-4 mx-auto text-center">Personalized meal plans to crush your weight goals fast</h1>
                        <CallToAction clicked={this.surveyStartHandler} surveyStart={this.state.surveyState}/>
                    </div>
                </div>
            </div>
            </Wrapper>
        )
    }
}

export default MealSurvey;