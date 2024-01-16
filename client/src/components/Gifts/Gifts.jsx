import React from 'react';
import './Gifts.scss';

// Import your images
import picture1 from '../../assets/bi.webp';
import picture2 from '../../assets/b3.webp';
import fullImage from '../../assets/b2.webp';

const Gifts= () => {
  return (
    <div className="gift-page">
      <h1 className="page-title">Unwrap the Rhythm of Joy</h1>
      <h2 className="sub-heading">Gifts that resonate with music lovers</h2>
      <p className="page-description">
        Discover unique gifts that harmonize the joy of giving with the love of music. Our carefully curated collection
        brings melody to every moment.
      </p>
      <div className="picture-row">
        <img src={picture1} alt="Gift Image 1" className="gift-picture" />
        <img src={picture2} alt="Gift Image 2" className="gift-picture" />
      </div>
       <p className="additional-description">
        Elevate your gift-giving experience with harmonious surprises. Explore our exclusive collection today.
      </p>
      <img src={fullImage} alt="Full Image" className="full-image" />
    </div>
  );
};

export default Gifts;
