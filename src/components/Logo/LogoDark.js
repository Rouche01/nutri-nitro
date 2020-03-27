import React from 'react';

import nutriNitroDark from '../../assets/nutri-nitro-dark.png';
import styles from './LogoDark.module.css';

const logoDark = (props) => (
    <div className={styles.LogoDark}> 
        <img src={nutriNitroDark} alt="Nutri Nitro Logo" />
    </div>
)

export default logoDark;