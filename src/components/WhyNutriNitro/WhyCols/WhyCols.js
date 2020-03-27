import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './WhyCols.module.css';

const whyCols = (props) => (
    <div className={styles.WhyCols}>
        <FontAwesomeIcon className={styles.IconClass} icon={props.fontIcon} />
        <div>
            <h5>{props.title}</h5>
            <p>{props.children}</p>
        </div>
    </div>
);

export default whyCols;