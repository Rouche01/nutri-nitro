import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import { Button } from 'react-bootstrap';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import CtaButton from './CtaButton/CtaButton';
import fitIcon from '../../assets/fit.svg';

import styles from './CallToAction.module.css';

const callToAction = (props) => (
    <Wrapper>
        <FontAwesomeIcon className={styles.BounceIcon} icon={faAngleDown} />
        <div className={styles.CtaButtons}>
            <CtaButton ctaText="Get Fit For Good" clickFunc={props.clicked} surveyState={props.surveyStart}>
                <img src={fitIcon} alt="Get Fit For Good" className={styles.CtaIcon} />
            </CtaButton>
            <CtaButton ctaText="Lose Weight For Good">
                <img src={fitIcon} alt="Get Fit For Good" className={styles.CtaIcon} />
            </CtaButton>
        </div>
    </Wrapper>
);

export default callToAction;