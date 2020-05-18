import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavItem.module.css';

const navItem = (props) => {
    return (
        <li className={styles.NavItem}>
            <Link to={props.link}>{props.children}</Link>
        </li>
    );
}

export default navItem;