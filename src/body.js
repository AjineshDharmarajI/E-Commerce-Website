// Body.js
import React from 'react';
import './body.css'; // Corrected import
import Month from './Monthly Analysis.png';
import Annual from './Annual Analysis.png';
import Sales from './Sales.jpg';
import Order from './order_image.png';

function Body() {
  return (
    <div className="container">
      <div className="grid-item">
        {/* Placeholder for chart 1 */}
        <div className="inner-grid-item">
          <h3>Monthly Order Details</h3>
          <img src={Order} alt="Monthly Order Details" />
        </div>
      </div>
      <div className="grid-item">
        {/* Placeholder for chart 2 */}
        <div className="inner-grid-item">
          <h3>Monthly Analysis</h3>
          <img src={Sales} alt="Monthly Analysis" />
        </div>
      </div>
      <div className="grid-item">
        {/* Placeholder for chart 3 */}
        <div className="inner-grid-item">
          <h3>Annual Analysis</h3>
          <img src={Annual} alt="Annual Analysis" />
        </div>
      </div>
      <div className="grid-item">
        {/* Placeholder for chart 4 */}
        <div className="inner-grid-item">
          <h3>Monthly Analysis</h3>
          <img src={Month} alt="Monthly Analysis" />
        </div>
      </div>
    </div>
  );
}

export default Body;
