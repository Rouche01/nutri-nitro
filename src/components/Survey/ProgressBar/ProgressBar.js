import React from 'react';

import styles from './ProgressBar.module.css';

const progressBar = (props) => (
    <ul className={styles.ProgressBar}>
        <li className={styles.active}>Demographics</li>
        <li>Eating Habits</li>
        <li>Work Habits</li>
        <li>Food Preference</li>
    </ul>
);

export default progressBar;