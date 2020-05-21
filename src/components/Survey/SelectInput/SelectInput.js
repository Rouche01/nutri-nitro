import React from 'react';

import styles from './SelectInput.module.css';

const selectInput = React.forwardRef((props, ref) => (
    <div ref={ref}>
        {props.options.map((option, idx) => {
            if(option.toLowerCase() === 'others') {
                option = `Others`;
            }
            return (
                <div key={option} className={option}>
                    <input className={styles.SelectInput} onClick={e => props.changed(e)} type="radio" value={option} name={props.name} id={option} />
                    <label htmlFor={option}>
                        {option}
                    </label>
                </div>
            )
        })}
    </div>
));

export default selectInput;