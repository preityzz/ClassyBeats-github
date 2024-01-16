// import React from 'react'
// import "./PDone.scss"
// import { useNavigate } from "react-router-dom";
// import successImage from '../../assets/banner-img.png'; // Replace with the actual path to your success image


// // import Home from "../../../components/Category/Home/Home";

// const PDone = () => {
    // const navigate = useNavigate();
//   return (
//          <div className="content">
     
//                 <div className="ca">
    //  <img src={successImage} alt="Success Image" className="success-image" />
//                     <div className="caa">
                   

//                         Thanks for shopping with us!
//                         </div>
                
//                     <div className="caa2">
                    
//                        Your order has been placed successfully.
//                     </div>
//                     <div className="caa3">
//                         For any product related query, drop an email to
//                     </div>
//                     <div className="u">shoeshopcontact@shop.com</div>

                
                //       <div className="button">
                //                 <button
                //                     className="checkout-cta"
                //                    onClick={() => navigate("/")}

                //                 >     
                //         Continue Shopping
                //                 </button>
                //             </div>
                // </div>
          
//          </div>
//     )
// }

// export default PDone

import React from 'react';
 import "./PDone.scss"
import { useNavigate } from "react-router-dom";


import successImage from '../../assets/su7.jpg'; // Replace with the actual path to your success image

const PDone = () => {
    const navigate = useNavigate();

  return (
    <div className='box-container'>
    <div className="payment-page">
      <img src={successImage}  className="success-image" />
      <div className="success-message">Payment Successful!</div>
      <div className="order-details">
      
        Great news! Your items are officially on the road to you.Congratulations!!
        
      </div>
      <p className="additional-message">
        For any product-related query, drop an email to
        <br/> 
        <a href="mailto:store@ClassyBeats.com">store@ClassyBeats.com</a>.
      </p>
      <p className="thanks-message">Thanks for shopping with us!</p>
      {/* <a href="/" className="back-to-home-link">
        Back to Home
      </a> */}
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

export default PDone;

