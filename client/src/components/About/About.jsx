// AboutPage.jsx

import React from 'react';
import './About.scss';

// Import your images
import fullImage1 from '../../assets/e3.webp';
import fullImage2 from '../../assets/e1.webp';
import fullImage3 from '../../assets/e2.webp';

const About = () => {
  return (
    <div className="about-page">
      <img src={fullImage1} alt="Full Image 1" className="full-image" />

      <div className="content-section">
        <h1 className="catchy-heading">Discover Our Story</h1>
        <p className="about-description">
           At ClassyBeats, we believe in the power of moments. Our journey began with a passion for creating
          exceptional experiences that leave a lasting imprint. Rooted in creativity and fueled by dedication, we take
          pride in delivering products and services of unparalleled quality. We are passionate about delivering exceptional experiences. Our journey is a blend of creativity, dedication,
          and a commitment to quality.
        </p>
      </div>

      <img src={fullImage2} alt="Full Image 2" className="full-image" />

      <div className="slogan-section">
        <h2 className="slogan">Crafting Moments, Creating Memories</h2>
        <p className="strap-feature-description">
          Explore our watches with the innovative "strap in and strap out" feature, offering you effortless customization
          for every occasion. Switch between different straps to match your style and elevate your overall look.
        </p>
      </div>

      <img src={fullImage3} alt="Full Image 3" className="full-image" />
    </div>
  );
};

export default About;
