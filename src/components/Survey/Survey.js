import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';
import { answerTextResponse } from '../../store/actions/surveyActions';

import styles from './Survey.module.css';
import Question from './Question/Question';
import ProgressBar from './ProgressBar/ProgressBar';
import TextInput from './TextInput/TextInput';
import Button from './Button/Button';
import SelectInput from './SelectInput/SelectInput';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import { surveyQuestions, surveySection } from '../../questions/SurveyQuestions';
import ExtraInfo from '../ExtraInfo/ExtraInfo';
import CheckboxInput from './CheckboxInput/CheckboxInput';

class Survey extends Component {

    // these are locally set state
    state = {
            nextButtonDisabled: true,
            sectionCount: null,
            checkedValues: []
    }


    // these are DOM references to the survey response used to capture the values
    textInputRef = React.createRef();
    selectInputRef = React.createRef();
    checkboxInputRef = React.createRef();

    // this is the current section of the survey question
    placeholderForSection = surveySection[this.props.sectionCounter];

    componentDidMount() {

        // check for non-initial section and first question to customize browser back button
        if(this.props.sectionCounter !== 0 && this.props.count === 0) {
            console.log('works');
            window.history.pushState(null, null, window.location.pathname);
            window.addEventListener('popstate', this.customizeBrowserPrev, false);
        }

        // on component mount check if the survey response type is a text-input & add focus if yes
        if(surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'TextInput') {
            this.textInputRef.current.focus();
        }

        // here we count the amount of question in a section & then set the state
        this.setState({
            sectionCount: surveyQuestions[this.placeholderForSection].length
        })

        // on component mount, we are checking if the question has already been answered
        let checker = this.props.answers[this.placeholderForSection].findIndex(answer => answer.id === this.props.questionId);
        if(checker >= 0) {
            // if it has an answer, set the input value to that answer & enable the next button
            if(surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'TextInput') {
                this.textInputRef.current.value = this.props.answers[this.placeholderForSection][this.props.count].answer;
            } else if(surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'SelectInput') {
                const selOptions = this.selectInputRef.current.children;
                for(let i = 0; i < selOptions.length; i++) {
                    if (selOptions[i].classList.value === this.props.answers[this.placeholderForSection][this.props.count].answer) {
                        selOptions[i].children[0].checked = true
                    }
                }
            } else if(surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'CheckBox') {
                const checkOptions = this.checkboxInputRef.current.children;
                const savedAns = this.props.answers[this.placeholderForSection][this.props.count].answer;
                for(let i = 0; i < checkOptions.length; i ++) {
                    for(let j = 0; j < savedAns.length; j++) {
                        if(checkOptions[i].classList.value.split(' ')[1] === savedAns[j].split(' ')[0]) {
                            checkOptions[i].children[0].checked = true;
                        }
                    }
                }
            }
            this.setState({
                nextButtonDisabled: false
            })
        } else {
            // if it does not have an answer, leave the input value empty and disable the next button
            if(surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'TextInput') {
                this.textInputRef.current.value = '';
                this.setState ({
                    nextButtonDisabled: true
                });
            } else if (surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'SelectInput') {
                console.log(this.selectInputRef.current);
            }
        }
    }


    componentWillUnmount() {
        window.removeEventListener('popstate', this.customizeBrowserPrev, false);
        if(this.props.sectionCounter !== 0 && this.props.count === 0) {
            this.props.toPreviousSection();
        }
    }


    componentDidUpdate(prevProps, prevState) {
        // console.log(this.state.nextButtonDisabled);

        // on component update we are checking the current section and changing it if there is a section change
        if(prevProps.sectionCounter !== this.props.sectionCounter) {
            this.placeholderForSection = surveySection[this.props.sectionCounter];

            // we also have to recount the amount of question in the new section & then set the state
            this.setState({
                sectionCount: surveyQuestions[this.placeholderForSection].length
            })
        }

        // if(prevProps.count !== this.props.count) {
        //     this.setState({
        //         checkedValues: []
        //     })
        // }

        // using the count state to track the question state
        if(prevProps.inputVal !== this.props.inputVal || prevProps.count !== this.props.count) {

            // on move to next question, check if question has been answered or not
            let checker = this.props.answers[this.placeholderForSection].findIndex(answer => answer.id === this.props.questionId);
            if(checker >= 0) {
                // if it has an answer, set the input value to that answer & enable the next button
                if(surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'TextInput') {
                    this.textInputRef.current.focus();
                    this.textInputRef.current.value = this.props.answers[this.placeholderForSection][this.props.count].answer;
                } else if(surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'SelectInput') {
                    const selOptions = this.selectInputRef.current.children;
                    for(let i = 0; i < selOptions.length; i++) {
                        if (selOptions[i].classList.value === this.props.answers[this.placeholderForSection][this.props.count].answer) {
                            selOptions[i].children[0].checked = true
                        }
                    }
                } else if (surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'CheckBox') {
                    const checkOptions = this.checkboxInputRef.current.children;
                    const savedAns = this.props.answers[this.placeholderForSection][this.props.count].answer;
                    for(let i = 0; i < checkOptions.length; i ++) {
                        for(let j = 0; j < savedAns.length; j++) {
                            if(checkOptions[i].classList.value.split(' ')[1] === savedAns[j].split(' ')[0]) {
                                checkOptions[i].children[0].checked = true;
                            }
                        }
                    }
                }
                this.setState({
                    nextButtonDisabled: false
                })
            } else {
                // if it does not have an answer, leave the input value empty and disable the next button
                if(surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'TextInput') {
                    this.textInputRef.current.focus();
                    this.textInputRef.current.value = '';
                    this.setState ({
                        nextButtonDisabled: true
                    });
                } else if (surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'SelectInput') {
                    console.log(this.selectInputRef.current);
                }
            }
        }
    }

    customizeBrowserPrev = (e) => {
        e.preventDefault();
        // console.log('Unmount');
        this.props.history.goBack();
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

    // this is used for survey with text response
    onAnswerChoose = () => {
        this.props.onAnswerSubmit(this.textInputRef.current.value);
        this.props.moveToNextQuestion();
        // this.props.answerTextResponse(this.textInputRef.current.value);
    }

    // this is used for multi-choice questions
    onAnswerChecked = (e) => {
        // if the item checked hasn't been checked(not included in the answer), include it.
        if(!this.state.checkedValues.includes(e.target.value)) {
            console.log(this.state.checkedValues.includes(e.target.value));
            this.setState({
                checkedValues: [...this.state.checkedValues, e.target.value],
                nextButtonDisabled: false
            }, () => {
                console.log(this.state.checkedValues);
            })
            // if the item has been checked, remove it from the array of answers
        } else {
            const copyCheckedValues = [...this.state.checkedValues];
            const duplicateIdx = copyCheckedValues.findIndex(val => val === e.target.value);
            copyCheckedValues.splice(duplicateIdx, 1);
            this.setState({
                checkedValues: copyCheckedValues
            }, () => {
                if(this.state.checkedValues.length < 1 ) {
                    this.setState({
                        nextButtonDisabled: true
                    })
                }
                console.log(this.state.checkedValues);
            })
        }
    }

    // use the mapped action to affect global state
    onCheckdValsSubmit = () => {
        this.props.onCheckedAnswersSubmitted(this.state.checkedValues);
        this.props.moveToNextQuestion();
    }

    // this is used for a single choice answer
    onAnswerSelected = (e) => {
        console.log(this.props.count);

        // check if we have exhausted the question for the section
        if(this.props.count === (this.state.sectionCount - 1)) {
            console.log('working');
            this.props.onAnswerSelect(e.target.value);
            // navigate to a new section after storing answer to global state
            this.props.history.push({pathname: '/survey/email'});
        } else {
            this.props.onAnswerSelect(e.target.value);
            this.props.moveToNextQuestion(); 
        }
    }


    handleEnterPressed = (e) => {
        if(e.key === 'Enter') {
            this.props.onAnswerSubmit(this.textInputRef.current.value);
            this.props.moveToNextQuestion();
        }
    }

    resolveQuestionOption = () => {
        if(surveyQuestions[this.placeholderForSection][this.props.count].answerType === "TextInput") {
            return (
                <Wrapper>
                    <TextInput ref={this.textInputRef} changed={this.checkInputState} type='number' 
                    unit={surveyQuestions[this.placeholderForSection][this.props.count].answerUnit} width='170px' enterPressed={(e) => this.handleEnterPressed(e)} /> 
                    <Button action="Next" bgColor='#cf3721' disabled={this.state.nextButtonDisabled} 
                    clicked={() => this.onAnswerChoose()} />
                </Wrapper>
            )
        } else if(surveyQuestions[this.placeholderForSection][this.props.count].answerType === "SelectInput") {
            return (
                <SelectInput ref={this.selectInputRef} 
                    options={surveyQuestions[this.placeholderForSection][this.props.count].answerOptions} 
                    name={surveyQuestions[this.placeholderForSection][this.props.count].dataKey} changed={(e) => this.onAnswerSelected(e) } />
            )
        } else {
            return (
                <React.Fragment>
                    <CheckboxInput ref={this.checkboxInputRef}
                    options={surveyQuestions[this.placeholderForSection][this.props.count].answerOptions} 
                    name={surveyQuestions[this.placeholderForSection][this.props.count].dataKey} 
                    answersChecked={this.onAnswerChecked} />
                    <Button action="Next" bgColor='#cf3721' disabled={this.state.nextButtonDisabled} 
                    clicked={() => this.onCheckdValsSubmit()} />
                </React.Fragment>
            )
        }
    }


    render() {
        
        return (
            <div className={styles.Survey}>
                <button className={styles.CloseButton}>
                    <Link to="/"><FontAwesomeIcon icon={faTimes} className="fa-2x" /></Link>
                </button>
                { this.props.questionId > 1 ? <button className={styles.PrevButton} 
                    onClick={this.props.onPreviousClick}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} style={{marginRight: '8px'}} />
                    Previous
                </button> : null }
                <ProgressBar />
                <Question className={styles.QuestionStyle}>
                    {surveyQuestions[this.placeholderForSection][this.props.count].question}
                </Question>
                {this.resolveQuestionOption()}
                {surveyQuestions[this.placeholderForSection][this.props.count].extra ? <ExtraInfo>{surveyQuestions[this.placeholderForSection][this.props.count].extra}</ExtraInfo> : null}
            </div>
        )
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
        onAnswerSubmit: (textVal) => dispatch({type: actionTypes.ANSWER_SURVEY, inputValue: textVal}),
        moveToNextQuestion: () => dispatch({ type: actionTypes.MOVE_TO_NEXT_QUESTION }),
        onPreviousClick: () => dispatch({type: actionTypes.PREVIOUS_QUESTION}),
        onAnswerSelect: (selectVal) => dispatch({type: actionTypes.SELECT_SURVEY, selectedValue: selectVal}),
        onCheckedAnswersSubmitted: (checkedVals) => dispatch({type: actionTypes.SUBMIT_ANSWERS_CHECKED, checkedValues: checkedVals }),
        toPreviousSection: () => dispatch({type: actionTypes.PREVIOUS_SECTION}),
        resetQuestionNumbers: () => dispatch({type: actionTypes.RESET_QUESTIONS})
    }
}

// const mapActionToProps = {
//     answerTextResponse,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Survey);