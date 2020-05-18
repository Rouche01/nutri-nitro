import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import HeaderPlusSub from '../Banner/HeaderPlusSub/HeaderPlusSub';

import styles from './EmailSignUp.module.css';
import Container from 'react-bootstrap/Container';

const emailSignUp = (props) => (
    <div>
        <Container>
            <hr/>
            <Row className={[`align-items-center`, styles.EmailSignUp].join(' ')}>
                <Col sm className="align-self-center">
                    <HeaderPlusSub title="Sign Up to Stay Updated">
                    Don't miss out on our great offers & latest deals. Join our mailing list. No spam, no ads.
                    </HeaderPlusSub>
                </Col>
                <Col sm>
                    <Form className={styles.SubscribeForm}>
                        {/* <Form.Control className="mb-3" type="text" size="lg" placeholder="Your name" /> */}
                        <Form.Control className="mb-3" type="email" size="lg" placeholder="Your email" />
                        <Button className={[styles.subscribeBtn, 'btn-block'].join(' ')} size="lg" type="submit" variant="danger">Subscribe</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>

)

export default emailSignUp;