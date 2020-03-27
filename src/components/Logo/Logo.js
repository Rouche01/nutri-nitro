import React from 'react';
import nutriNitroLogo from '../../assets/nutri-nitro-logo.png';
import styles from './Logo.module.css';

const logo = (props) => (
    <div className={styles.Logo}>
        <img src={nutriNitroLogo} alt="Nutri-Nitro Logo" />
    </div>
)

export default logo;