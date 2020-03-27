import React from 'react';

import styles from './Question.module.css';
import { Container } from 'react-bootstrap';

const question = (props) => (
    <Container>
        <p className={styles.Question}>{props.children}</p>
    </Container>
);

export default question;