import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actionTypes';

import styles from './EmailInfo.module.css';
import Question from '../Question/Question';
import TextInput from '../TextInput/TextInput';
import ExtraInfo from '../../ExtraInfo/ExtraInfo';
import Button from '../Button/Button';
// import { browserHistory } from 'react-router-dom';


class EmailInfo extends Component {
    state = {
        continueButtonDisabled: true,
    }

    componentDidMount() {
        if(this.props.userInfo.email) {
            this.emailInpuRef.current.value = this.props.userInfo.email;
            this.setState({
                continueButtonDisabled: false
            })
        }
    }

    componentDidUpdate() {

    }


    componentWillUnmount() {
        
    }

    emailInpuRef = React.createRef();
    emailRegex =  /\S+@\S+\.\S+/;

    previousSection = () => {
        // console.log('Hello');
        this.props.history.goBack();
    }

    continueToSeeResult = () => {
        this.props.onContinueClicked(this.emailInpuRef.current.value);
        this.props.history.push({ pathname: '/predict-weight'});
    }

    checkEmailInput = () => {
        if(this.emailInpuRef.current.value && this.emailRegex.test(this.emailInpuRef.current.value)) {
            // console.log('not empty');
            this.setState({
                continueButtonDisabled: false
            })
        } else {
            this.setState({
                continueButtonDisabled: true
            })
        }
    }


    render () {
        const extraHtml = `<p>We do not share any personal information. We'll email you a copy of your results & meal plan for convenient access. By submitting your email address, you may also receive email offers from us on products and services. You may unsubscribe at any time.</p>`


        return (
            <div className={styles.EmailInfo}>
                <Question>
                    Enter your email to see how much weight you can lose for good.
                </Question>
                <TextInput ref={this.emailInpuRef} changed={this.checkEmailInput} type='email' width='330px' />
                {this.state.continueButtonDisabled ? <p className={styles.Invalid}>Please enter a valid email address!</p> : null }
                <ExtraInfo>{extraHtml}</ExtraInfo>
                <p className={styles.Links}><Link to='/'>Privacy Policy</Link> | <Link to='/'>Terms & Conditions</Link></p>
                <Button action="Back" bgColor='#CCCCCC' color='#595959' clicked={this.previousSection} />
                <Button action="Continue" bgColor='#cf3721' clicked={this.continueToSeeResult} 
                disabled={this.state.continueButtonDisabled} />
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
        onContinueClicked: (email) => dispatch({type: actionTypes.SAVE_USER_EMAIL, userEmail: email})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailInfo);