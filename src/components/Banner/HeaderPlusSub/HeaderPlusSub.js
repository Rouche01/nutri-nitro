import React from 'react';
import Container from 'react-bootstrap/Container';


const headerPlusSub = (props) => (
    <Container>
        <h2>{props.title}</h2>
        <p>{props.children}</p>
    </Container>
)

export default headerPlusSub;