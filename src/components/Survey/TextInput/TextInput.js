import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';

import styles from './TextInput.module.css';

const textInput = React.forwardRef((props, ref) => (
    <InputGroup size="lg" className={styles.TextInput} >
        <FormControl ref={ref} type="number" onChange={props.changed} className={styles.Input} />
        <InputGroup.Append>
            <InputGroup.Text>{props.unit}</InputGroup.Text>
        </InputGroup.Append>
    </InputGroup>
));

export default textInput;