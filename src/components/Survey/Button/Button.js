import React from 'react';
import Button from 'react-bootstrap/Button';

import styles from './Button.module.css';

const button = (props) => (
    <Button size="lg" className={styles.Button} style={{backgroundColor: props.bgColor, color: props.color}} disabled={props.disabled} onClick={props.clicked}>{props.action}</Button>
);

export default button;