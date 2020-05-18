import React, { Component } from 'react';
import MealSurvey from '../MealSurvey/MealSurvey';
import WhyNutriNitro from '../../components/WhyNutriNitro/WhyNutriNitro';
import Banner from '../../components/Banner/Banner';
import HowTo from '../../components/HowTo/HowTo';
import EmailSignUp from '../../components/EmailSignUp/EmailSignUp';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';


class HomePage extends Component {
    render() {
        return (
            <Layout>
                <MealSurvey />
                <WhyNutriNitro />
                <Banner />
                <HowTo />
                <EmailSignUp />
                <Footer />
            </Layout>
        );
    }
};

export default HomePage;