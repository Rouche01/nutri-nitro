import React, { Component } from 'react';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import HowToCard from './HowToCard/HowToCard';

import styles from './HowTo.module.css';


class HowTo extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 600,
                    setting: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        }

        return (
            <Container>
                <Slider {...settings} className={styles.Slider}>
                    <HowToCard title="Fill the survey" step="1" index={1}>Some quick example text to build on the card title and make up the bulk of the card's content.</HowToCard>
                    <HowToCard title="Create an account" step="2" index={2}>Some quick example text to build on the card title and make up the bulk of the card's content.</HowToCard>
                    <HowToCard title="Make your payment" step="3" index={3}>Some quick example text to build on the card title and make up the bulk of the card's content.</HowToCard>
                    <HowToCard title="Your meal plan in your inbox" step="4" index={4}>Some quick example text to build on the card title and make up the bulk of the card's content.</HowToCard>
                    <HowToCard title="Follow your meal plan" step="5" index={5}>Some quick example text to build on the card title and make up the bulk of the card's content.</HowToCard>
                </Slider>
            </Container>
        )
    }
}

export default HowTo;