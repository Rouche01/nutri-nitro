import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions' 

import styles from './PredictWeightStatus.module.css';
import Button from '../../Survey/Button/Button';

const PredictWeightStatus = (props) => {
    const [guessWeight, setGuessWeight] = useState(0);

    useEffect(() => {
        const determineWeightStatus = () => {
            let predictedWeight;
            const demographyAnswers = props.answers['demography'];
            const targetWeight = parseInt(demographyAnswers.find(answer => answer.dataKey === "Ideal weight").answer);
            const presentWeight = parseInt(demographyAnswers.find(answer => answer.dataKey === "Present weight").answer);
            if (presentWeight > targetWeight) {
                predictedWeight = presentWeight - 8;
            } else {
                predictedWeight = presentWeight + 8;
            }
            return predictedWeight;
        }
        // console.log(determineWeightStatus());
        setGuessWeight(
            determineWeightStatus()
        )
    }, [props.answers]);

    const continueToNextSection = () => {
        props.onNextClicked(props.history.location.state.emailInput);
    }

    return (
        <div className={styles.PredictWeightStatus}>
            <h4>Based on your answers, you will be...</h4>
            <h2>{guessWeight}kg by August 20</h2>
            <p className={styles.Terms}>Provided, you follow the plans strictly<br /> Read <Link to="/" >Terms & Conditions</Link></p>
            <hr />
            <div className={styles.ExtraInfo}>
                <p>Now, let's customize your plan.</p>
                <p>Please take your time to fill in your responses accurately. Each response is used to create your personalized meal program.</p>
            </div>
            <Button action="Let's Go" bgColor="#cf3721" clicked={continueToNextSection} />
        </div>
    );
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
        onNextClicked: (emailInput) => dispatch({type: actionTypes.TO_NEXT_SECTION, userEmail: emailInput}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PredictWeightStatus);