import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

// import Wrapper from '../../../hoc/Wrapper/Wrapper';
import styles from './FooterContact.module.css';

const footerContact = (props) => (
    <div className={styles.FooterContact}>
        <div>
            <h6>Get in Touch</h6>
            <div>
                <span><a href="/">hello@nutrinitro.com</a></span>
                <span><a href="/">+234-810-485-2967</a></span>
            </div>
        </div>
        <div className={styles.SocialIcons}>
            <a href="/">
                <FontAwesomeIcon className={styles.SocialIcon} icon={faTwitter} />
                <span className={styles.HoverStyle}></span>
            </a>
            <a href="/">
                <FontAwesomeIcon className={styles.SocialIcon} icon={faInstagram} />
                <span className={styles.HoverStyle}></span>
            </a>
            <a href="/">
                <FontAwesomeIcon className={styles.SocialIcon} icon={faFacebookF} />
                <span className={styles.HoverStyle}></span>
            </a>
        </div>
    </div>
);

export default footerContact;