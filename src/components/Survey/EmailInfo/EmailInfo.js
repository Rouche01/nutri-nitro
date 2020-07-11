import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

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
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener('popstate', this.customizeBrowserBackButton, false);
    }

    // componentDidUpdate() {
    //     console.log(this.emailInpuRef);
    // }


    componentWillUnmount() {
        // console.log('Unmount');
        window.removeEventListener('popstate', this.customizeBrowserBackButton, false);
    }

    customizeBrowserBackButton = (e) => {
        e.preventDefault();
        // console.log('Unmount');
        this.props.onBackClicked();
        this.props.history.goBack();
    }

    emailInpuRef = React.createRef();
    emailRegex =  /\S+@\S+\.\S+/;

    previousSection = () => {
        // console.log('Hello');
        this.props.onBackClicked();
        this.props.history.goBack();
    }

    continueToSeeResult = () => {
        this.props.onContinueClicked();
        this.props.history.push({ pathname: '/predict-weight', 
        state: { 
            emailInput: this.emailInpuRef.current.value
        }});
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
        inputVal: state.inputVal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBackClicked: () => dispatch({type: actionTypes.PREVIOUS_SECTION}),
        onContinueClicked: () => dispatch({type: actionTypes.NEXT_BREAK})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailInfo);