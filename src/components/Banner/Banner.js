import React from 'react';
import HeaderPlusSub from './HeaderPlusSub/HeaderPlusSub';
import { Button } from 'react-bootstrap';

import styles from './Banner.module.css';

const banner = (props) => (
    <div className={styles.Banner}>
        <div className={styles.DarkOverlay}>
            <HeaderPlusSub title="How it Works" subWidth="80%" >
                NutriNitro helps you achieve your health and body fitness goals through our meal plans that are derived from psychology-based assessment.
            </HeaderPlusSub>
            <Button className={styles.ctaButton}>Get Started</Button>
        </div>
    </div>
);

export default banner;