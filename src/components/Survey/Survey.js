import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDoubleLeft, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';

import styles from './Survey.module.css';
import Question from './Question/Question';
import ProgressBar from './ProgressBar/ProgressBar';
import TextInput from './TextInput/TextInput';
import Button from './Button/Button';
import SelectInput from './SelectInput/SelectInput';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import { surveySection } from '../../questions/SurveyQuestions';
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

    surveyQuestions = this.props.surveyQuestions;

    componentDidMount() {

        // check for non-initial section and first question to customize browser back button
        if(this.props.sectionCounter !== 0 && this.props.count === 0) {
            console.log('works');
            window.history.pushState(null, null, window.location.pathname);
            window.addEventListener('popstate', this.customizeBrowserPrev, false);
        }

        // on component mount check if the survey response type is a text-input & add focus if yes
        if(this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'TextInput') {
            this.textInputRef.current.focus();
        }

        // here we count the amount of question in a section & then set the state
        this.setState({
            sectionCount: this.surveyQuestions[this.placeholderForSection].length
        })

        // on component mount, we are checking if the question has already been answered
        let checker = this.props.answers[this.placeholderForSection].findIndex(answer => answer.id === this.props.questionId);
        if(checker >= 0) {
            // if it has an answer, set the input value to that answer & enable the next button
            if(this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'TextInput') {
                this.textInputRef.current.value = this.props.answers[this.placeholderForSection][this.props.count].answer;
            } else if(this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'SelectInput') {
                const selOptions = this.selectInputRef.current.children;
                for(let i = 0; i < selOptions.length; i++) {
                    if (selOptions[i].classList.value === this.props.answers[this.placeholderForSection][this.props.count].answer) {
                        selOptions[i].children[0].checked = true
                    }
                }
            } else if(this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'CheckBox') {
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
            if(this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'TextInput') {
                this.textInputRef.current.value = '';
                this.setState ({
                    nextButtonDisabled: true
                });
            } else if (this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'SelectInput') {
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
                sectionCount: this.surveyQuestions[this.placeholderForSection].length
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
                if(this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'TextInput') {
                    this.textInputRef.current.focus();
                    this.textInputRef.current.value = this.props.answers[this.placeholderForSection][this.props.count].answer;
                } else if(this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'SelectInput') {
                    const selOptions = this.selectInputRef.current.children;
                    for(let i = 0; i < selOptions.length; i++) {
                        if (selOptions[i].classList.value === this.props.answers[this.placeholderForSection][this.props.count].answer) {
                            selOptions[i].children[0].checked = true
                        }
                    }
                } else if (this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'CheckBox') {
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
                if(this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'TextInput') {
                    this.textInputRef.current.focus();
                    this.textInputRef.current.value = '';
                    this.setState ({
                        nextButtonDisabled: true
                    });
                } else if (this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'SelectInput') {
                    console.log(this.selectInputRef.current);
                    const selOptions = this.selectInputRef.current.children;
                    for(let i = 0; i < selOptions.length; i++) {
                        selOptions[i].children[0].checked = false
                    }
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

    toPreviousQuestion = () => {
        this.props.onPreviousClick();
    }

    // this is used for survey with text response
    onAnswerChoose = () => {
        console.log('works');
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
            if(this.props.sectionCounter > 0) {
                this.props.toNextSection();
            } else {
                this.props.history.push({pathname: '/survey/email'});
            }
        } else {
            this.props.onAnswerSelect(e.target.value);

            // add condtional question if gender selected is female
            if(this.props.count === 3 && e.target.value === 'Female') {
                const checkAnswerStatus = this.props.answers[this.placeholderForSection][this.props.count];

                // check if gender answer already exist
                if(checkAnswerStatus) {

                    // if it exist and the answer is not female add the conditional question
                    if (checkAnswerStatus.answer !== 'Female') {
                        const optionalQustn = {
                            question: 'Are you pregnant?',
                            dataKey: 'Pregnancy status',
                            answerType: 'SelectInput',
                            answerOptions: ['Yes', 'No'],
                            answerUnit: null,
                        };
                        this.props.delConditionalAnswers(this.props.count + 1);
                        this.props.addConditionalQuestn(this.props.count + 1, optionalQustn);
                        this.setState({
                            sectionCount: this.state.sectionCount + 1,
                        }, () => {
                            console.log(this.state.sectionCount);
                        })
                    }

                    // if gender answer does not exist add the female conditional question
                } else {
                    const optionalQustn = {
                        question: 'Are you pregnant?',
                        dataKey: 'Pregnancy status',
                        answerType: 'SelectInput',
                        answerOptions: ['Yes', 'No'],
                        answerUnit: null,
                    };
                    this.props.addConditionalQuestn(this.props.count + 1, optionalQustn);
                    this.setState({
                        sectionCount: this.state.sectionCount + 1,
                    }, () => {
                        console.log(this.state.sectionCount);
                    })
                }
                // console.log(this.surveyQuestions);

                // move to the next question
                this.props.moveToNextQuestion(); 

                // perform logic when male is chosen as gender response
            } else if(this.props.count === 3 && e.target.value === 'Male') {
                const checkAnswerStatus = this.props.answers[this.placeholderForSection][this.props.count];

                // check if gender response already exist
                if(checkAnswerStatus) {
                    if(checkAnswerStatus.answer !== 'Male') {

                        // remove conditional question and answers
                        this.props.delConditionalAnswers(this.props.count + 1);
                        this.props.delConditionalQuestn(this.props.count + 1);
                        this.setState({
                            sectionCount: this.state.sectionCount - 1,
                        }, () => {
                            console.log(this.state.sectionCount);
                        })
                    }
                } 
                this.props.moveToNextQuestion();
            }
             else {
                this.props.moveToNextQuestion();
            }
        }
    }


    handleEnterPressed = (e) => {
        if(e.key === 'Enter') {
            this.props.onAnswerSubmit(this.textInputRef.current.value);
            this.props.moveToNextQuestion();
        }
    }

    resolveQuestionOption = () => {
        if(this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === "TextInput") {
            return (
                <Wrapper>
                    <TextInput ref={this.textInputRef} changed={this.checkInputState} type='number' 
                    unit={this.surveyQuestions[this.placeholderForSection][this.props.count].answerUnit} width='170px' enterPressed={(e) => this.handleEnterPressed(e)} /> 
                    <Button action="Next" bgColor='#cf3721' disabled={this.state.nextButtonDisabled} 
                    clicked={this.onAnswerChoose} />
                </Wrapper>
            )
        } else if(this.surveyQuestions[this.placeholderForSection][this.props.count].answerType === "SelectInput") {
            return (
                <SelectInput ref={this.selectInputRef} 
                    options={this.surveyQuestions[this.placeholderForSection][this.props.count].answerOptions} 
                    name={this.surveyQuestions[this.placeholderForSection][this.props.count].dataKey} changed={(e) => this.onAnswerSelected(e) } />
            )
        } else {
            return (
                <React.Fragment>
                    <CheckboxInput ref={this.checkboxInputRef}
                    options={this.surveyQuestions[this.placeholderForSection][this.props.count].answerOptions} 
                    name={this.surveyQuestions[this.placeholderForSection][this.props.count].dataKey} 
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
                    onClick={this.toPreviousQuestion}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} style={{marginRight: '8px'}} />
                    Previous
                </button> : null }
                <ProgressBar />
                <Question className={styles.QuestionStyle}>
                    {this.surveyQuestions[this.placeholderForSection][this.props.count].question}
                </Question>
                {this.resolveQuestionOption()}
                {this.surveyQuestions[this.placeholderForSection][this.props.count].extra ? <ExtraInfo>{this.surveyQuestions[this.placeholderForSection][this.props.count].extra}</ExtraInfo> : null}
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
        userInfo: state.userInfo,
        surveyQuestions: state.surveyQuestions
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
        toNextSection: () => dispatch({ type: actionTypes.TO_NEXT_SECTION}),
        resetQuestionNumbers: () => dispatch({type: actionTypes.RESET_QUESTIONS}),
        addConditionalQuestn: (pos, questn) => dispatch({ type: actionTypes.ADD_CONDITIONAL_QUESTION, position: pos, condQuestn: questn }),
        delConditionalQuestn: (pos) => dispatch({ type: actionTypes.REMOVE_CONDITIONAL_QUESTION, position: pos }),
        delConditionalAnswers: (pos) => dispatch({ type: actionTypes.REMOVE_CONDITIONAL_ANSWERS, position: pos })
    }
}

// const mapActionToProps = {
//     answerTextResponse,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Survey);