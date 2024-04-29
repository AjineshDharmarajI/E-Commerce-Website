import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './payment_details.css';
import { Amount } from './cart';
import Items from './Items';

function Payment_detail() {
  const location = useLocation();
  const [totalPrice, setTotalPrice] = useState(0);
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (location.state && location.state.totalPrice) {
      setTotalPrice(location.state.totalPrice);
      setItem(location.state.items);
    }
  }, [location.state]);

  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponDiscount, setCouponDiscount] = useState('Rs. 0.00');

  const applyCoupon = () => {
    if (couponCode === "HAPPY500" || couponCode === "HAPPY-DIWALI") {
      setCouponDiscount("- Rs. 500.00");
      setCouponError('');
    } else {
      setCouponDiscount("Rs. 0.00");
      setCouponError('Invalid coupon code');
    }
  };

  const calculateTotalAmount = () => {
    const discount = 5.00;
    const deliveryCharge = 10.00;
    let totalAmount = totalPrice - discount + deliveryCharge;

    // Adjust totalAmount based on coupon discount
    if (couponDiscount.includes("-")) {
      const couponValue = parseFloat(couponDiscount.replace("- Rs. ", ""));
      totalAmount -= couponValue;
    }

    return totalAmount.toFixed(2);
  };

  return (
    <div className="total-price-container">
      <div className="coupon-section">
        <h3>Coupon</h3>
        <input
          type="text"
          placeholder="Enter Coupon Code"
          className='coupon-input'
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button className='btn-apply' onClick={applyCoupon}>Apply</button>
        <p className='gen-error'>{couponError}</p>
      </div>
      <hr className="line" />
      <div className="payment-details">
        <h3>Payment Details</h3>
      </div>
      <div className="total-price-details">
        <p className="coupon-p"><span>Price:</span> <span>Rs. {Amount({ salePrice: Items ? Items.salePrice : 0, quantity: Items ? Items.quantity : 0 })}</span></p>
        <p className="coupon-p"><span>Discount:</span> <span>- Rs. 5.00</span></p>
        <p className="coupon-p"><span>Coupon Discount:</span> <span>{couponDiscount}</span></p>
        <p className="coupon-p"><span>Delivery Charges:</span> <span>Rs. 10.00</span></p>
        <hr className="line" />
        <p><span>Total Amount:</span> <span>Rs. {calculateTotalAmount()}</span></p>
        <div className="Buy-now">
          <Link to="/cart">
            <button className='btn-cart'><i className="fa-solid fa-cart-shopping"></i> Go back to Cart</button>
          </Link>
          <button className='btn-bill'>Generate Bill</button>
        </div>
      </div>
    </div>
  );
}

export default Payment_detail;
