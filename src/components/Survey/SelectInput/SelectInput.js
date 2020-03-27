import React from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';
import styles from './SelectInput.module.css';

const selectInput = (props) => (
    <Wrapper>
        {props.options.map((option, idx) => {
            return (
                <Wrapper key={idx}>
                    <input className={styles.SelectInput} type="radio" name="gender" id={option} />
                    <label htmlFor={option}>
                        {option}
                    </label>
                </Wrapper>
            )
        })}
    </Wrapper>
) 

export default selectInput;