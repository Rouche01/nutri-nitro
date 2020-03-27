import React from 'react';

import styles from './FooterMenuItems.module.css';

const footerMenuItems = (props) => (
    <li className={styles.FooterMenuItems}>
        <a href="/">{props.children}</a>
    </li>
);

export default footerMenuItems;