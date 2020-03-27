import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WhyCols from './WhyCols/WhyCols';
import { faCloudMeatball, faPepperHot, faDrumstickBite, faSeedling} from '@fortawesome/free-solid-svg-icons';

import styles from './WhyNutriNitro.module.css';

const whyNutriNitro = (props) => (
    <div className={styles.WhyNutriNitro}>
        <Container className={styles.Container}>
            <Row>
                <Col sm>
                    <WhyCols fontIcon={faCloudMeatball} title="No commitment whatsoever">
                        Skipping weeks or cancelling is super easy.
                    </WhyCols>
                </Col>
                <Col sm>
                    <WhyCols fontIcon={faPepperHot} title="Reliable and affordable ">
                        Our huge recipe selection wows week after week.
                    </WhyCols>
                </Col>
                <Col sm>
                    <WhyCols fontIcon={faDrumstickBite} title="No skimpin’ on the chicken!">
                        With step-by-step instructions so you never miss a beat.
                    </WhyCols>
                </Col>
                <Col sm>
                    <WhyCols fontIcon={faSeedling} title="Vetted by nutritionist">
                        So no morsels or dollops go to waste lorem ipsum lorem.
                    </WhyCols>
                </Col>
            </Row>
        </Container>
    </div>
);

export default whyNutriNitro;