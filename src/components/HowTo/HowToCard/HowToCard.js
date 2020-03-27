import React from 'react';
import Card from 'react-bootstrap/Card';

import styles from './HowToCard.module.css'

const howToCard = (props) => (
    <Card className={styles.HowToCard}>
        <Card.Header><span className={styles.HeaderSpan}>{props.step}</span></Card.Header>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.children}</Card.Text>
        </Card.Body>
    </Card>
)

export default howToCard;