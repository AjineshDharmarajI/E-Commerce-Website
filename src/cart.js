import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

export const Amount = (items) => {
  const amount = items.salePrice * items.quantity;
  return amount;
};


const Cart = ({ cartItems, updateCartItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + (item.salePrice * item.quantity), 0);
  };

  const incrementQuantity = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity++;
    setItems(updatedItems);
    updateCartItems(updatedItems);
  };

  const decrementQuantity = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity--;
      setItems(updatedItems);
      updateCartItems(updatedItems);
    }
  };

  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    updateCartItems(updatedItems);
  };

  return (
    <div className='full'>
      <div className="cart">
        <h1 className='heading'>CART</h1>
      </div>
      <div className='table'>
        {items.length === 0 ? (
          <p className="empty-cart-message">There are no products in the cart.</p>
        ) : (
          <table className="tab">
            <thead>
              <tr className="hrow">
                <th style={{ width: '3%' }}>Product</th>
                <th style={{ width: '1%' }}>Quantity</th>
                <th style={{ width: '1%' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    <div id={`prod${item.id}`}>
                      <img className="cart_img" src={item.imgSrc} alt={item.altText} />
                      <div className="details">
                        <h3 className="prod_name">{item.description}</h3>
                        <div className="price">
                          <p>Rs.{item.salePrice}.00</p>
                          <del>Rs.{item.originalPrice}.00</del>
                        </div>
                        <button className="remove_button" onClick={() => removeItem(item.id)}>Remove</button>
                        <Link to={{ pathname: "/payment_details", state: { totalPrice: calculateTotalPrice(), items: item }}}>
                          <button className="bill_button">Payment</button>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="quantity-selector">
                      <button className="quan_button" onClick={() => decrementQuantity(index)}>-</button>
                      <input className="quan_input" type="number" value={item.quantity} min="1" readOnly />
                      <button className="quan_button" onClick={() => incrementQuantity(index)}>+</button>
                    </div>
                  </td>
                  <td className="total">Rs.{Amount(item)}.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Cart;
