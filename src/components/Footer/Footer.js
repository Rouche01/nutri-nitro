import React from 'react';
import Container from 'react-bootstrap/Container';

import styles from './Footer.module.css';
import FooterLogoMenu from './FooterLogoMenu/FooterLogoMenu';
import FooterMenu from './FooterMenu/FooterMenu';
import FooterContact from './FooterContact/FooterContact';

const footer = (props) => (
    <div className={styles.Footer}>
        <Container className={styles.FooterContainer}>
            <div className={styles.FooterLogoMenu}>
                <FooterLogoMenu />
            </div>
            <div className={styles.FooterMenu}>
                <FooterContact />
                <FooterMenu title="Explore" links={['Home', 'Blog', 'Support', 'FAQs']} />
                <FooterMenu title="Legal" links={['Privacy Policy', 'Terms & Conditions', 'About']}/>
            </div>
        </Container>
    </div>
)

export default footer;