import React from 'react';
import styles from './CheckboxInput.module.css';

const CheckboxInput = React.forwardRef(({options, name, answersChecked}, ref) => {

    const Unit = options.map(option => {
        const optionIdentifier = option.split(' ')[0];
        return (
        <div className={[styles.CheckboxInput, optionIdentifier].join(' ')} key={option}>
            <input type="checkbox" name={name} id={option} value={option} onClick={e => answersChecked(e)} />
            <span className={styles.CustomCheck}></span>
            <label htmlFor={option}>{option}</label>
        </div>
        );
    })


    return (
        <div ref={ref}>
            {/* <div className={styles.CheckboxInput}>
                <input type="checkbox" id="place" name="place" value="place" />
                <label htmlFor="place">Marriage or Relationship</label>
            </div> */}
            {Unit}
        </div>
    );
})

export default CheckboxInput;