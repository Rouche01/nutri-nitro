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
                    <HowToCard title="Start Assessment" step="1" index={1}>Click on the 'Get Started' button to start the assessment, so we can know and understand you better. </HowToCard>
                    <HowToCard title="Fill the Survey" step="2" index={2}>Make sure to fill the survey with correct and sincere information, for high effectiveness</HowToCard>
                    <HowToCard title="Create an account" step="3" index={3}>In the middle of the survey you will be required to create an account with your email</HowToCard>
                    <HowToCard title="Complete Survey" step="4" index={4}>Finish up the rest of the survey questions to create a customized meal plan for yourself</HowToCard>
                    <HowToCard title="Make your payment" step="5" index={5}>You can now make payment for your customized meal plan, made to fit your lifestyle perfectly </HowToCard>
                    <HowToCard title="Your meal plan in your inbox" step="6" index={6}>Some quick example text to build on the card title and make up the bulk of the card's content.</HowToCard>
                </Slider>
            </Container>
        )
    }
}

export default HowTo;