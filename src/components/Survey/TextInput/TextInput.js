import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';

import styles from './TextInput.module.css';

const textInput = React.forwardRef((props, ref) => (
    <InputGroup size="lg" className={styles.TextInput} style={{width: props.width}}>
        <FormControl ref={ref} type={props.type} onChange={props.changed} className={styles.Input} />
        { props.unit ? <InputGroup.Append>
            <InputGroup.Text>{props.unit}</InputGroup.Text>
        </InputGroup.Append> : null }
    </InputGroup>
));

export default textInput;