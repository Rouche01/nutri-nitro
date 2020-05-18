import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EmailInfo.module.css';
import Question from '../Question/Question';
import TextInput from '../TextInput/TextInput';
import ExtraInfo from '../../ExtraInfo/ExtraInfo';
import Button from '../Button/Button';


const emailInfo = (props) => {
    const extraHtml = `<p>We do not share any personal information. We'll email you a copy of your results & meal plan for convenient access. By submitting your email address, you may also receive email offers from us on products and services. You may unsubscribe at any time.</p>`


    return (
        <div className={styles.EmailInfo}>
            <Question>
                Enter your email to see how much weight you can lose for good.
            </Question>
            <TextInput type='email' width='330px' />
            <ExtraInfo>{extraHtml}</ExtraInfo>
            <p className={styles.Links}><Link to='/'>Privacy Policy</Link> | <Link to='/'>Terms & Conditions</Link></p>
            <Button action="Back" bgColor='#CCCCCC' color='#595959' />
            <Button action="Continue" bgColor='#cf3721' />
        </div>
    );
}

export default emailInfo;