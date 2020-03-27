import React from 'react';
import Button from 'react-bootstrap/Button';

import styles from './Button.module.css';

const button = (props) => (
    <Button size="lg" className={styles.Button} disabled={props.disabled} onClick={props.clicked}>{props.action}</Button>
);

export default button;