import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;
