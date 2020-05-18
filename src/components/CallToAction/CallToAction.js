import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import CtaButton from './CtaButton/CtaButton';
import fitIcon from '../../assets/fit.svg';

import styles from './CallToAction.module.css';

const callToAction = (props) => (
    <Wrapper>
        <FontAwesomeIcon className={styles.BounceIcon} icon={faAngleDown} />
        <div className={styles.CtaButtons}>
            <Link to={props.linkTo}>
                <CtaButton ctaText="Get Fit For Good">
                    <img src={fitIcon} alt="Get Fit For Good" className={styles.CtaIcon} />
                </CtaButton>
            </Link>
            <CtaButton ctaText="Lose Weight For Good">
                <img src={fitIcon} alt="Get Fit For Good" className={styles.CtaIcon} />
            </CtaButton>
        </div>
    </Wrapper>
);

export default callToAction;