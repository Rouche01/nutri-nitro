import React from 'react';
import FooterMenuItems from './FooterMenuItems/FooterMenuItems'

import styles from './FooterMenu.module.css';

const footerMenu = (props) => {
    const links = props.links.map(link => {
        return <FooterMenuItems>{link}</FooterMenuItems>
    });

    return (
        <div className={styles.FooterMenu}>
            <h6>{props.title}</h6>
            <ul className={styles.FooterMenuList}>{links}</ul>
        </div>
    )
}

export default footerMenu;