import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WhyCols from './WhyCols/WhyCols';
import food from '../../assets/food-freedom.svg';
import lifestyle from '../../assets/lifestyle.svg';
import weightLoss from '../../assets/weight-loss.svg';
import wallet from '../../assets/wallet.svg';

import styles from './WhyNutriNitro.module.css';

const whyNutriNitro = (props) => (
    <div className={styles.WhyNutriNitro}>
        <Container className={styles.Container}>
            <Row>
                <Col sm>
                    <WhyCols icon={food} title="You eat what you like">
                        No such thing as bad foods. With NutriNitro, you will learn to eat what you like in a smart way!
                    </WhyCols>
                </Col>
                <Col sm>
                    <WhyCols icon={lifestyle} title="Fit for any lifestyle">
                        No cause for worries, our plans are designed to fit into your lifestyle perfectly.
                    </WhyCols>
                </Col>
                <Col sm>
                    <WhyCols icon={weightLoss} title="Permanent weight loss">
                        We prevent regaining of lost weight by helping you loose extra weight gradually.
                    </WhyCols>
                </Col>
                <Col sm>
                    <WhyCols icon={wallet} title="Save your money">
                        We help you save money by regulating your portion sizes & serving sizes. You don't have to buy as many groceries.
                    </WhyCols>
                </Col>
            </Row>
        </Container>
    </div>
);

export default whyNutriNitro;