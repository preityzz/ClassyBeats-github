import React from 'react';
 import "./PFail.scss"
import { useNavigate } from "react-router-dom";


import failImage from '../../assets/r1.jpg'; 

const PFail = () => {
    const navigate = useNavigate();

  return (
    <div className='box-container'>
    <div className="payment-page">
      <img src={failImage}  className="success-image" />
      <div className="fail-message">Payment Error!</div>
      <div className="order-details">
      
       whooooppssss!! Your transaction has failed.Please try again later .
        
      </div>
      <p className="additional-message">
        For any product-related query, drop an email to
        <br/> 
        <a href="mailto:store@ClassyBeats.com">store@ClassyBeats.com</a>.
      </p>
      <p className="thanks-message">Thanks for shopping with us!</p>
       <div className="buttonpd">
                                <button
                                    className="checkout-ctapd"
                                   onClick={() => navigate("/")}

                                >     
                        Continue Shopping
                                </button>
                            </div>
                
    </div>
    </div>
  );
};

export default PFail;
