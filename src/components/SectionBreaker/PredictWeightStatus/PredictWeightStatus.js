import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actionTypes';

import styles from './PredictWeightStatus.module.css';
import Button from '../../Survey/Button/Button';

class PredictWeightStatus extends Component {
    state = {
        guessWeight: '',
        goalDate: ''
    }

    componentDidMount() {
        console.log('mount');

        this.setState({
            guessWeight: this.determineWeightStatus(),
            goalDate: this.determineDuration()
        })

        this.determineDuration();
    }

    componentWillUnmount() {

    }

    // customizeBrowserPrev = (e) => {
    //     e.preventDefault();
    //     // console.log('Unmount');
    //     this.props.onBrowserBackClicked();
    //     this.props.history.goBack();
    // }

    determineWeightStatus = () => {
        let predictedWeight;
        const demographyAnswers = this.props.answers['demography'];
        const targetWeight = parseInt(demographyAnswers.find(answer => answer.dataKey === "Ideal weight").answer);
        const presentWeight = parseInt(demographyAnswers.find(answer => answer.dataKey === "Present weight").answer);
        if (presentWeight > targetWeight) {
            predictedWeight = presentWeight - 8;
        } else {
            predictedWeight = presentWeight + 8;
        }
        return predictedWeight;
    }

    determineDuration = () => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() + 2);
        let targetDate = currentDate.toLocaleDateString('en-GB');
        targetDate = targetDate.split('/');
        const targetMonth = months[targetDate[1] - 1]
        return (`${targetMonth}, ${targetDate[0]}`);
    }

    continueToNextSection = () => {
        this.props.onNextClicked();
        this.props.history.push('/survey');
    }

    render() {
        return (
            <div className={styles.PredictWeightStatus}>
                <h4>Based on your answers, you will be...</h4>
                <h2>{this.state.guessWeight}kg by {this.state.goalDate}</h2>
                <p className={styles.Terms}>Provided, you follow the plans strictly<br /> Read <Link to="/" >Terms & Conditions</Link></p>
                <hr />
                <div className={styles.ExtraInfo}>
                    <p>Now, let's customize your plan.</p>
                    <p>Please take your time to fill in your responses accurately. Each response is used to create your personalized meal program.</p>
                </div>
                <Button action="Let's Go" bgColor="#cf3721" clicked={this.continueToNextSection} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter,
        questionId: state.questionId,
        sectionCounter: state.sectionCounter,
        answers: state.answers,
        inputVal: state.inputVal,
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNextClicked: () => dispatch({type: actionTypes.TO_NEXT_SECTION}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PredictWeightStatus);