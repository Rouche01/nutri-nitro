import React from 'react';

import styles from './CtaButton.module.css';

const ctaButton = (props) => (
    <div className={styles.CtaButton}>
        <div className={styles.HoverPosition}>
            <button className={styles.Button} onClick={props.clickFunc}>{props.children}</button>
            <svg className={styles.HoverStyle} width="150" height="150">
                <rect x="5" y="5" rx="100" fill="none" stroke="#fff" width="115" height="115"></rect>
            </svg>
        </div>
        <span>{props.ctaText}</span>
    </div>
);

export default ctaButton;