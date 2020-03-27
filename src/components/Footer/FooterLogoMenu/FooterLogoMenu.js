import React from 'react';

import styles from './FooterLogoMenu.module.css';

const footerLogoMenu = (props) => (
    <div className={styles.FooterLogoMenu}>
        <p>Nutri-Nitro</p>
        <div className={styles.Copyright}>
            <small>&copy; 2020 NUTRI-NITRO Inc.</small>
            <small>All Rights Reserved.</small>
        </div>
    </div>
)

export default footerLogoMenu;