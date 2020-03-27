import React from 'react';
import HeaderPlusSub from './HeaderPlusSub/HeaderPlusSub';

import styles from './Banner.module.css';

const banner = (props) => (
    <div className={styles.Banner}>
        <div className={styles.DarkOverlay}>
            <HeaderPlusSub title="How it Works">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla consequatur consectetur error distinctio debitis eveniet commodi sapiente.
            </HeaderPlusSub>
        </div>
    </div>
);

export default banner;