import React, { useState } from 'react';
import './Add_promotion.css';
import Adnav from './Adnav';

const CouponManagement = () => {
  const [coupons, setCoupons] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [productId, setProductId] = useState('');
  const [discount, setDiscount] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const displayCoupons = () => {
    return coupons.map((coupon, index) => (
      <div key={index} className="coupon-item">
        <p><strong>Coupon Code:</strong> {coupon.code}</p>
        <p><strong>Product ID or Category:</strong> {coupon.productId}</p>
        <p><strong>Discount:</strong> {coupon.discount}%</p>
        <p><strong>Expiry Date:</strong> {coupon.expiryDate}</p>
        <button onClick={() => editCoupon(index)}>Edit</button>
        <button onClick={() => deleteCoupon(index)}>Delete</button>
      </div>
    ));
  };

  const addCoupon = (event) => {
    event.preventDefault();
    const newCoupon = { code: couponCode, productId, discount, expiryDate };
    setCoupons([...coupons, newCoupon]);
    closeModal();
  };

  const editCoupon = (index) => {
    const editedCoupon = coupons[index];
    setCoupons(coupons.filter((coupon, i) => i !== index));
    setCouponCode(editedCoupon.code);
    setProductId(editedCoupon.productId);
    setDiscount(editedCoupon.discount);
    setExpiryDate(editedCoupon.expiryDate);
    openModal();
  };

  const deleteCoupon = (index) => {
    setCoupons(coupons.filter((coupon, i) => i !== index));
  };

  const openModal = () => {
    document.getElementById('couponModal').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('couponModal').style.display = 'none';
    setCouponCode('');
    setProductId('');
    setDiscount('');
    setExpiryDate('');
  };

  const searchCoupon = () => {
    const input = searchInput.toUpperCase();
    const searchResults = coupons.filter((coupon) => {
      const { code, productId } = coupon;
      return code.toUpperCase().includes(input) || productId.toUpperCase().includes(input);
    });
    setSearchResult(searchResults);
  };

  return (
    <>
    <Adnav/>
    <div className="ad-container">
      <h1 className='ad-coupon'>Coupon Management</h1>
      <div>
        <button className='btn-model' onClick={openModal}>Add Coupon</button>
        {/* <input type="text" id="searchInput" placeholder="Search by Coupon Code or Product ID" onChange={(e) => setSearchInput(e.target.value)} />
        <button onClick={searchCoupon}>Search</button> */}
      </div>
      <div id="searchResultContainer">
        {searchResult.length > 0 ? (
          <div>
            {searchResult.map((coupon, index) => (
              <div key={index} className="coupon-item">
                <p><strong>Coupon Code:</strong> {coupon.code}</p>
                <p><strong>Product ID or Category:</strong> {coupon.productId}</p>
                <p><strong>Discount:</strong> {coupon.discount}%</p>
                <p><strong>Expiry Date:</strong> {coupon.expiryDate}</p>
                <button onClick={() => editCoupon(index)}>Edit</button>
                <button onClick={() => deleteCoupon(index)}>Delete</button>
              </div>
            ))}
          </div>
        ) : (
          <p>Coupon or product not found.</p>
        )}
      </div>
      <div id="couponList">
        {displayCoupons()}
      </div>

      <div id="couponModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Add Coupon</h2>
          <form onSubmit={addCoupon}>
            <label htmlFor="couponCode">Coupon Code:</label>
            <input className='ad-input' type="text" id="couponCode" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} required />
            <label htmlFor="productId">Product ID or Category:</label>
            <input className='ad-input' type="text" id="productId" value={productId} onChange={(e) => setProductId(e.target.value)} required />
            <label htmlFor="discount">Discount (%):</label>
            <input className='ad-input' type="number" id="discount" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input className='ad-input' type="date" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default CouponManagement;
