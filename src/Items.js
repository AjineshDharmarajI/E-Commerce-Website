import React, { useState } from 'react';
import './Items.css'; // Import your CSS file
import Img1 from './pic5.jpg'
import Img2 from './pic6.jpg'
import Img3 from './pic7.jpg'
import Img4 from './pic8.jpg'

const Items = ({mainImage}) => {
  const [mainImg, setMainImg] = useState(mainImage);
  const [productColor, setProductColor] = useState('cream white');
  const [productStyle, setProductStyle] = useState('Frame');
  const [productSize, setProductSize] = useState('3 X 5 Feet');

  const changeImage = (image, color, style, size) => {
    setMainImg(image);
    setProductColor(color);
    setProductStyle(style);
    setProductSize(size);
  };

  return (
    <div className="product-container">
      <div className="product-images">
        <img src={mainImg} alt="Product Image" id="mainImage" className="img-fluid" />
      </div>

      <div className="product-details">
        <div className="product-info">
          <div>
            <h2>Radha Krishna 3D Elevation</h2>
          </div>
        </div>
        <div className="rating-container">
          <i className="fas fa-star star-icon"></i>
          <span className="rating-value">4.5</span>
          <div className="divider"></div>
          <span className="rating-value">79 Rating</span>
        </div>
        <div className="product-rates">
          <div className="price">
            <p>Rs.8,000.00</p>
            <del>Rs.10,000.00</del>
          </div>
        </div>
        <div className="quantity-box">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" max="20" value="1" />
        </div>
        <div className="product-frame">
          <p id="product-frame">Style : {productStyle}</p>
          <button onClick={() => changeImage('pic Bu-3.webp', 'cream white', 'Frame', '3 X 5 Feet')}>Frame</button>
          <button onClick={() => changeImage('pic Bu-4.webp', 'Branze', 'Framless', '2 X 10 Feet')}>Frameless</button>
        </div>
        <div className="product-size">
          <p id="product-size">Size : {productSize}</p>
          <button onClick={() => changeImage('pic Bu-3.webp', 'cream white', 'Frame', '3 X 5 Feet')}>3 X 5 Feet</button>
          <button onClick={() => changeImage('pic Bu-4.webp', 'Branze', 'Framless', '2 X 10 Feet')}>2 X 10 Feet</button>
        </div>
        <p id="product-color">Color : {productColor}</p>
        <div className="small-images">
          <img src={Img1} alt="Small Image 1" className="small-image" title="cream white" onClick={() => changeImage(Img1, 'cream white', 'Frame', '3 X 5 Feet')} />
          <img src={Img2} alt="Small Image 2" className="small-image" title="Golden" onClick={() => changeImage(Img2, 'Golden', 'Frame', '3 X 5 Feet')} />
          <img src={Img3} alt="Small Image 4" className="small-image" title="Branze" onClick={() => changeImage(Img3, 'Branze', 'Framless', '3 X 5 Feet')} />
          <img src={Img4} alt="Small Image 5" className="small-image" title="Black" onClick={() => changeImage(Img4, 'Black', 'Frameless', '3 X 5 Feet')} />
        </div>
        <div className="buttons">
          <button className="button"><a href="cart2.html"><i className="fa-solid fa-cart-plus"></i> Add to Cart</a></button>
          <button className="button"><i className="fa-solid fa-cart-shopping"></i> Buy Now</button>
        </div>
        <div className="product-details-text">
          <p>
            LARGE SIZE 7X3.5 FEET RADHA KRISHNA 3D ELEVATION SCULPTURE RELIEF WALL ART  Product Name: Radha Krishna Love Wall Art Product <a href="">Read more</a> </p>
        </div>
        <div className="whatsapp">
          <a href="https://wa.me/918148196646" target="_blank">
            <img src="whatsapp logo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Items;
