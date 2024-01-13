import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="red-box">
        <div className="info-box">
          <img src="/reward.svg" alt="Rewards" className="vector-image" />
          <p>Unlock travel rewards with One Key</p>
        </div>
        <div className="info-box">
          <img src="/discount.svg" alt="Discount" className="vector-image" />
          <p>Save more with Member Prices</p>
        </div>
        <div className="info-box">
          <img src="/calender.svg" alt="Calender" className="vector-image" />
          <p>Free cancellation options if plans change</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
