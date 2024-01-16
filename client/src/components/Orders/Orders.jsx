// CorporateOrdersPage.jsx

import React from 'react';
import './Orders.scss';

// Import your images
import mainImage from '../../assets/o1.webp';
import product1Image from '../../assets/os1.webp';
import product2Image from '../../assets/os2.webp';
import product3Image from '../../assets/os3.webp';
import fullImage from '../../assets/o3.webp';

const Orders = () => {
  return (
    <div className="corporate-orders-page">
      <div className="main-header">
        {/* <h1 className="page-title">Corporate Orders</h1> */}
        <img src={mainImage} alt="Main Image" className="main-image" />
      </div>
      <div className="content-section">
        <h2 className="sub-heading">Elevate Your Corporate Gifting Experience</h2>
        <p className="page-description">
          Make a lasting impression with our premium corporate gift solutions. Whether it's for clients, employees, or
          special events, our curated selection ensures a touch of sophistication in every gesture.
        </p>
      </div>
      <div className="product-row">
        <img src={product1Image} alt="Product 1" className="product-image" />
        <img src={product2Image} alt="Product 2" className="product-image" />
        <img src={product3Image} alt="Product 3" className="product-image" />
      </div>
      <div className="additional-section">
        <h2 className="big-heading">Unparalleled Elegance</h2>
        <img src={fullImage} alt="Full Image" className="full-image" />
      </div>
    </div>
  );
};

export default Orders;

