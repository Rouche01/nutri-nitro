import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import styles from './Survey.module.css';
import Question from './Question/Question';
import ProgressBar from './ProgressBar/ProgressBar';
import TextInput from './TextInput/TextInput';
import Button from './Button/Button';
import SelectInput from './SelectInput/SelectInput';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import surveyQuestions from '../../questions/SurveyQuestions';
import ExtraInfo from '../ExtraInfo/ExtraInfo';

class Survey extends Component {
    state = {
            nextButtonDisabled: true,
            counter: 0,
            questionId: 1,
            question: '',
            answerType: '',
            answerOptions: [],
            answerUnit: '',
            demographyCount: 0,
            answers: []
        }
    textInputRef = React.createRef();
    selectInputRef = React.createRef();

    componentDidMount() {
        let demographyCount;
        for(let i = 0; i < surveyQuestions.length; i++) {
            if(surveyQuestions[i].section === 'demography') {
                if(!demographyCount) {
                    demographyCount = 1;
                } else {
                    demographyCount = demographyCount + 1
                }
            }
        }


        this.setState({
            question: surveyQuestions[0].question,
            answerType: surveyQuestions[0].answerType,
            answerOptions: [...surveyQuestions[0].answerOptions],
            answerUnit: surveyQuestions[0].answerUnit,
            demographyCount: demographyCount
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

    // this happens when a next button is clicked for text input or when an option is selected for select input
    // takes in e - an event in the case of select input
    onAnswerSubmit = () => {
        // checks if the answer for the question already exist
        if(!this.state.answers.some(answer => answer.id === this.state.questionId)) {
           // if it does not exist, we create a new answer
           let newAnswer;
           const answersCopy = [...this.state.answers];
           // creates new answer for text-input type answer
            newAnswer = {
                dataKey: surveyQuestions[this.state.counter].dataKey,
                id: this.state.questionId,
                answer: this.textInputRef.current.value
            }

           // insert the new answer into the answers array and then set the answers state
            answersCopy.push(newAnswer);
            console.log(answersCopy)
            this.setState({
                answers: answersCopy,
            });

            // do this if the answer for the question already exist and there is a new answer 
        } else if (this.state.answers.some(answer => answer.id === this.state.questionId) 
        && this.state.answers[this.state.counter].answer !== this.textInputRef.current.value) {
            console.log('Different value');
            const answersChanged = [...this.state.answers];

            // assign the new value for the answer to that question and 
            answersChanged[this.state.counter].answer = this.textInputRef.current.value;
            console.log(answersChanged);
            this.setState({
                answers: answersChanged,
            })
        }
        // moving to the next question
        this.moveToNextQuestion();
    }

    onAnswerSelect = (e) => {
        // checks if the answer for the question already exist

        if(!this.state.answers.some(answer => answer.id === this.state.questionId)) {
            // if it does not exist, we create a new answer
            let newAnswer;
            const answersCopy = [...this.state.answers];
            newAnswer = {
                dataKey: surveyQuestions[this.state.counter].dataKey,
                id: this.state.questionId,
                answer: e.target.value
            }
            answersCopy.push(newAnswer);
            console.log(answersCopy)
            this.setState({
                answers: answersCopy,
            });
            // removing the checked attribute from the previously selected option in select-input
            console.log(e.target);
            e.target.checked = false
        } else if (this.state.answers.some(answer => answer.id === this.state.questionId) 
            && this.state.answers[this.state.counter].answer !== e.target.value) {
            console.log(e.target.value);
            const answersChanged = [...this.state.answers];

            // assign the new value for the answer to that question and 
            answersChanged[this.state.counter].answer = e.target.value;
            console.log(answersChanged);
            this.setState({
                answers: answersChanged,
            })
        }
        // moving to the next question
        this.moveToNextQuestion();
    }

    moveToNextQuestion = () => {
        // increment the counter and the question ID to move to the next question
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        if(counter !== this.state.demographyCount) {
            // use the incremented counter to set a new state for the new question
            this.setState({
                counter: counter,
                questionId: questionId,
                question: surveyQuestions[counter].question,
                answerType: surveyQuestions[counter].answerType,
                answerOptions: [...surveyQuestions[counter].answerOptions],
                answerUnit: surveyQuestions[counter].answerUnit,
            }, () => {
                // console.log(this.state);
                // check if the next question already has an answer
                let checker = this.state.answers.findIndex(answer => answer.id === this.state.questionId);
                if(checker >= 0) {
                    console.log(this.state.answers.findIndex(answer => answer.id === this.state.questionId))
                    // if it has an answer, set the input value to that answer & enable the next button
                    if(this.state.answerType === 'TextInput') {
                        this.textInputRef.current.value = this.state.answers[counter].answer;
                    } else if(this.state.answerType === 'SelectInput') {
                        const selOptions = this.selectInputRef.current.children;
                        for(let i = 0; i < selOptions.length; i++) {
                            if (selOptions[i].classList.value === this.state.answers[counter].answer) {
                                selOptions[i].children[0].checked = true
                            }
                        }
                    }
                    this.setState({
                        nextButtonDisabled: false
                    })
                } else {
                    // if it does not have an answer, leave the input value empty and disable the next button
                    if(this.state.answerType === 'TextInput') {
                        this.textInputRef.current.value = '';
                        this.setState ({
                            nextButtonDisabled: true
                        });
                    } else if (this.state.answerType === 'SelectInput') {
                        console.log(this.selectInputRef.current);
                    }
                }
            })
        } else if (counter === this.state.demographyCount) {
            // console.log(this.props);
            this.props.history.push({pathname: '/survey/email', state: {
                counter: this.state.counter,
                questionId: this.state.questionId,
                answers: [...this.state.answers]
            }});
            console.log(this.props);
        }
    }

    // this is to go back to the previous questions
    toPrevQuestion = () => {
        // decrement the counter and the question id
        const counter = this.state.counter - 1;
        const questionId = this.state.questionId - 1;

        // use this counter and question id to set the state for the question & enable the next button
        this.setState ({
            counter: counter,
            questionId: questionId,
            question: surveyQuestions[counter].question,
            answerType: surveyQuestions[counter].answerType,
            answerOptions: [...surveyQuestions[counter].answerOptions],
            answerUnit: surveyQuestions[counter].answerUnit,
            nextButtonDisabled: false
        }, () => {
            // setting answer for the question by looking into the answers state
            if(this.state.answerType === 'TextInput') {
                this.textInputRef.current.value = this.state.answers[counter].answer;
            } else if (this.state.answerType === 'SelectInput') {
                const selOptions = this.selectInputRef.current.children;
                console.log(selOptions);
                for(let i = 0; i < selOptions.length; i++) {
                    if (selOptions[i].classList.value === this.state.answers[counter].answer) {
                        console.log(selOptions[i].children[0]);
                        selOptions[i].children[0].checked = true
                    }
                }
            }
        })
        
    }


    // test = (e) => {
    //     console.log(e.target.value);
    // }

    render() {
        return (
            <div className={styles.Survey}>
                <button className={styles.CloseButton}>
                    <Link to="/"><FontAwesomeIcon icon={faTimes} className="fa-2x" /></Link>
                </button>
                { this.state.questionId > 1 ? <button className={styles.PrevButton} 
                    onClick={this.toPrevQuestion}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} style={{marginRight: '8px'}} />
                    Previous
                </button> : null }
                <ProgressBar />
                <Question className={styles.QuestionStyle}>
                    {this.state.question}
                </Question>
                {this.state.answerType === "TextInput" ? 
                    // the question renders a text input when the question requires a text input
                    <Wrapper>
                        <TextInput ref={this.textInputRef} changed={this.checkInputState} type='number' unit={this.state.answerUnit} width='170px' /> 
                        {/* { this.state.questionId > 1 ? <Button action="Previous" clicked={this.toPrevQuestion} /> : null } */}
                        <Button action="Next" bgColor='#cf3721' disabled={this.state.nextButtonDisabled} clicked={this.onAnswerSubmit} />
                    </Wrapper>: 
                    // the question renders a radio button options when the question requires this type of answer
                    <SelectInput ref={this.selectInputRef} options={this.state.answerOptions} name={surveyQuestions[this.state.counter].dataKey} changed={this.onAnswerSelect} /> }
                {surveyQuestions[this.state.counter].extra ? <ExtraInfo>{surveyQuestions[this.state.counter].extra}</ExtraInfo> : null}
            </div>
        )
    }
}

export default Survey;