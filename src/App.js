import React from 'react';

import Layout from './components/Layout/Layout';
import MealSurvey from './containers/MealSurvey/MealSurvey';
import WhyNutriNitro from './components/WhyNutriNitro/WhyNutriNitro';
import HowTo from './components/HowTo/HowTo';
import Banner from './components/Banner/Banner';
import EmailSignUp from './components/EmailSignUp/EmailSignUp';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Layout>
        <MealSurvey />
        <WhyNutriNitro />
        <Banner />
        <HowTo />
        <EmailSignUp />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
