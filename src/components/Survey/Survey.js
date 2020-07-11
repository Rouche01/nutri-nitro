import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import styles from './Survey.module.css';
import Question from './Question/Question';
import ProgressBar from './ProgressBar/ProgressBar';
import TextInput from './TextInput/TextInput';
import Button from './Button/Button';
import SelectInput from './SelectInput/SelectInput';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import { surveyQuestions, surveySection } from '../../questions/SurveyQuestions';
import ExtraInfo from '../ExtraInfo/ExtraInfo';

class Survey extends Component {
    state = {
            nextButtonDisabled: true,
            sectionCount: null,
    }

    textInputRef = React.createRef();
    selectInputRef = React.createRef();

    componentDidMount() {
        console.log(surveySection);

        if(surveyQuestions[this.placeholderForSection][this.props.count].answerType === 'TextInput') {
            this.textInputRef.current.focus();
        }

        let sectionCount;
        for(let i = 0; i < surveyQuestions[surveySection[this.props.sectionCounter]].length; i++) {
            if(!sectionCount) {
                sectionCount = 1;
            } else {
                sectionCount = sectionCount + 1
            }
        }

        this.setState({
            sectionCount: sectionCount
        })

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

    placeholderForSection = surveySection[this.props.sectionCounter];

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.state.nextButtonDisabled);

        // console.log(this.props.count, 'did' );

        if(prevProps.sectionCounter !== this.props.sectionCounter) {
            this.placeholderForSection = surveySection[this.props.sectionCounter];
        }

        if(prevProps.inputVal !== this.props.inputVal || prevProps.count !== this.props.count) {

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

    onAnswerChoose = () => {
        this.props.onAnswerSubmit(this.textInputRef.current.value);
    }

    onAnswerSelected = (e) => {
        console.log(this.props.count);
        if(this.props.count === (this.state.sectionCount - 1)) {
            console.log('working');
            this.props.onAnswerSelect(e.target.value);
            this.props.history.push({pathname: '/survey/email'});
        } else {
            this.props.onAnswerSelect(e.target.value);  
        }
    }


    handleEnterPressed = (e) => {
        if(e.key === 'Enter') {
            this.props.onAnswerSubmit(this.textInputRef.current.value);
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
                {surveyQuestions[this.placeholderForSection][this.props.count].answerType === "TextInput" ? 
                    // the question renders a text input when the question requires a text input
                    <Wrapper>
                        <TextInput ref={this.textInputRef} changed={this.checkInputState} type='number' 
                        unit={surveyQuestions[this.placeholderForSection][this.props.count].answerUnit} width='170px' enterPressed={(e) => this.handleEnterPressed(e)} /> 
                        <Button action="Next" bgColor='#cf3721' disabled={this.state.nextButtonDisabled} 
                        clicked={() => this.onAnswerChoose()} />
                    </Wrapper>: 
                    // the question renders a radio button options when the question requires this type of answer
                    <SelectInput ref={this.selectInputRef} 
                    options={surveyQuestions[this.placeholderForSection][this.props.count].answerOptions} 
                    name={surveyQuestions[this.placeholderForSection][this.props.count].dataKey} changed={(e) => this.onAnswerSelected(e) } /> }
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
        onPreviousClick: () => dispatch({type: actionTypes.PREVIOUS_QUESTION}),
        onAnswerSelect: (selectVal) => dispatch({type: actionTypes.SELECT_SURVEY, selectedValue: selectVal})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey);