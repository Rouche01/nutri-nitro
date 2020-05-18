import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './HeaderPlusSub.module.css';


const headerPlusSub = (props) => {
    
    return (
        <Container className={styles.HeaderPlusSub}>
            <h2>{props.title}</h2>
            <p style={{width: props.subWidth}}>{props.children}</p>
        </Container>
    )
}

export default headerPlusSub;