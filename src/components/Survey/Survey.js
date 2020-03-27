import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import styles from './Survey.module.css';
import Question from './Question/Question';
import ProgressBar from './ProgressBar/ProgressBar';
import TextInput from './TextInput/TextInput';
import Button from './Button/Button';
import SelectInput from './SelectInput/SelectInput';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import surveyQuestions from '../../questions/SurveyQuestions';

class Survey extends Component {
    state = {
            nextButtonDisabled: true,
            counter: 0,
            questionId: 1,
            question: '',
            answerType: '',
            answerOptions: [],
            answerUnit: '',
            answers: []
        }
    textInputRef = React.createRef();

    componentDidMount() {
        this.setState({
            question: surveyQuestions[0].question,
            answerType: surveyQuestions[0].answerType,
            answerOptions: [...surveyQuestions[0].answerOptions],
            answerUnit: surveyQuestions[0].answerUnit
        })
    }

    componentDidUpdate() {
        console.log(this.state.nextButtonDisabled);
    }

    checkInputState = () => {
        if(this.textInputRef.current.value !== "") {
            this.setState({
                nextButtonDisabled: false
            })
        } else {
            this.setState({
                nextButtonDisabled: true
            })
        }
    }

    onAnswerSubmit = () => {
        if(!this.state.answers.some(answer => answer.id === this.state.questionId)) {
           console.log('Working')
           const answersCopy = [...this.state.answers];
            const newAnswer = {
                dataKey: surveyQuestions[this.state.counter].dataKey,
                id: this.state.questionId,
                answer: this.textInputRef.current.value
            }
            answersCopy.push(newAnswer);
            console.log(answersCopy)
           this.setState({
            answers: answersCopy,
            })
        } else if (this.state.answers.some(answer => answer.id === this.state.questionId) 
        && this.state.answers[this.state.counter].answer !== this.textInputRef.current.value) {
            console.log('Different value');
            const answersChanged = [...this.state.answers];
            answersChanged[this.state.counter].answer = this.textInputRef.current.value;
            console.log(answersChanged);
            this.setState({
                answers: answersChanged,
            })
        }
        this.moveToNextQuestion();
    }

    moveToNextQuestion = () => {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        this.setState({
            counter: counter,
            questionId: questionId,
            question: surveyQuestions[counter].question,
            answerType: surveyQuestions[counter].answerType,
            answerOptions: [...surveyQuestions[counter].answerOptions],
            answerUnit: surveyQuestions[counter].answerUnit,
        }, () => {
            console.log(this.state);
            let checker = this.state.answers.findIndex(answer => answer.id === this.state.questionId);
            if(checker >= 0) {
                console.log(this.state.answers.findIndex(answer => answer.id === this.state.questionId))
                this.textInputRef.current.value = this.state.answers[counter].answer;
                this.setState({
                    nextButtonDisabled: false
                })
            } else {
                this.textInputRef.current.value = '';
                this.setState ({
                    nextButtonDisabled: true
                })
            }
        })
    }

    toPrevQuestion = () => {
        const counter = this.state.counter - 1;
        const questionId = this.state.questionId - 1;
        this.setState ({
            counter: counter,
            questionId: questionId,
            question: surveyQuestions[counter].question,
            answerType: surveyQuestions[counter].answerType,
            answerOptions: [...surveyQuestions[counter].answerOptions],
            answerUnit: surveyQuestions[counter].answerUnit,
            nextButtonDisabled: false
        })
        this.textInputRef.current.value = this.state.answers[counter].answer;
    }

    render() {
        return (
            <div className={styles.Survey}>
                <button onClick={this.props.closeHandler} className={styles.CloseButton}><FontAwesomeIcon icon={faTimes} className="fa-2x" /></button>
                <ProgressBar />
                <Question className={styles.QuestionStyle}>
                    {this.state.question}
                </Question>
                {this.state.answerType === "TextInput" ? 
                    <Wrapper>
                        <TextInput ref={this.textInputRef} changed={this.checkInputState} unit={this.state.answerUnit} /> 
                        { this.state.questionId > 1 ? <Button action="Previous" clicked={this.toPrevQuestion} /> : null }
                        <Button action="Next" disabled={this.state.nextButtonDisabled} clicked={this.onAnswerSubmit} />
                    </Wrapper>: 
                    <SelectInput options={this.state.answerOptions} /> }
            </div>
        )
    }
}

export default Survey;