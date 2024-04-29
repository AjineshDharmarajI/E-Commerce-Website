import React, { useState } from 'react';
import './Addproduct.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faToggleOn as faToggleOnOutline, faToggleOff as faToggleOffOutline } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn, faToggleOff} from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import Nav from './Adnav';

function Addproduct() {

  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink','Black','White', 'Gray'];
  const [selectedColors, setSelectedColors] = useState([]);

  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(item => item !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };


  const [isFrameOn, setIsFrameOn] = useState(true); // State for Frame option
  const [isFramelessOn, setIsFramelessOn] = useState(true); // State for Frameless option

  // Function to toggle Frame option
  const toggleFrame = () => {
    setIsFrameOn(prevState => !prevState);
  };

  // Function to toggle Frameless option
  const toggleFrameless = () => {
    setIsFramelessOn(prevState => !prevState);
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < selectedColors.length; i += 3) {
      const colorsInRow = selectedColors.slice(i, i + 3);
      const row = (
        <div key={i} className="row">
          {colorsInRow.map((color, index) => (
            <div key={index} className="col-md-4">
              <div className="section-header">
                <h2>{color}</h2>
              </div>
              {/* Upload image part */}
              <input type="file" />
            </div>
          ))}
        </div>
      );
      rows.push(row);
    }
    return rows;
  };
  

  return (
    <>
    <Nav/>
    <div className='adpro'>
    <h1>Add Product:</h1>
    </div>
    
    <div className="container-fluid">
      <div className="sec">
        <div className="row">
          <div className="col-md-3">
            <div className="section-header">
              <p>Product ID</p>
            </div>
            <input type="text" className='pro-input' id="tkm" name="user_name" placeholder="ID " required />
          </div>
          <div className="col-md-1"></div>

          <div className="col-md-3">
            <div className="section-header">
              <p>Product Name</p>
            </div>
            <input type="text" className='pro-input' id="wul" name="user_name" placeholder="Name" required />
          </div>
          <div className="col-md-1"></div>

          <div className="col-md-3">
            <div className="section-header">
              <p> MRP Price</p>
            </div>
            <input type="text" className='pro-input' id="wul" name="user_name" placeholder="price" required />
          </div>
        </div>

        <div className="row">
        <div className="col-md-3">
            <div className="section-header">
              <p>Sales Price</p>
            </div>
            <input type="text" className='pro-input' id="wul" name="user_name" placeholder="price" required />
          </div>
          <div className="col-md-1"></div>

          <div className="col-md-3">
            <div className="section-header">
              <p>Quantity</p>
            </div>
            <input type="text" className='pro-input' id="tkm" name="user_name" placeholder="No of Quantity" required />
          </div>
          <div className="col-md-1"></div>

          <div className="col-md-3">
            <div className="section-header">
              <p>Categories</p>
            </div>
            <select id="drop-down" name="ratio" required>
              <option value="">Select Ratio</option>
              <option value="1:1">Art</option>
              <option value="2:1">Music</option>
              <option value="3:1">Literature</option>
              <option value="4:1">Sculpture</option>
              <option value="5:1">Aesthetics</option>
            </select>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row thr">
        <div className="col-md-2">
          <div>
            <p>Frame/Frameless</p>
          </div>
          <div className='frame'>
          <h6 className={isFrameOn ? 'selected' : ''} onClick={toggleFrame}>Frame</h6>
          <a onClick={toggleFrame}>
            <FontAwesomeIcon 
              icon={isFrameOn ? faToggleOn : faToggleOff}
              style={{ color: isFrameOn ? 'green' : 'red' }}
            />
          </a>
          </div>
            <div className='frameless'>
          <h6 className={isFramelessOn ? 'selected' : ''} onClick={toggleFrameless}>Frameless</h6>
          <a onClick={toggleFrameless}>
            <FontAwesomeIcon 
              icon={isFramelessOn ? faToggleOn : faToggleOff}
              style={{ color: isFramelessOn ? 'green' : 'red' }}
            />
           
          </a>
          </div>

        </div>

          <div className="col-md-2"></div>

          <div className="col-md-3">
            <div className="section-header">
              <p>Ratio</p>
            </div>
            <select id="drop-down" name="ratio" required>
              <option value="">Select Ratio</option>
              <option value="1:1">1:1</option>
              <option value="2:1">2:1</option>
              <option value="3:1">3:1</option>
              <option value="4:1">4:1</option>
              <option value="5:1">5:1</option>
            </select>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-3">
            <div className="section-header">
              <p>Product Colors</p>
            </div>
            <div className="color-selector">
              {colors.map(color => (
                <div
                  key={color}
                  className={`circle ${selectedColors.includes(color) ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => toggleColor(color)}
                >
                  {selectedColors.includes(color) && <i className="fas fa-check"></i>}
                </div>
              ))}
            </div>
          </div>
        </div>
        {renderRows()} {/* Move renderRows call here */}
                <div className='row'>
                  <div className='col'>
                <p>Add Images</p>
                  </div>
                </div>
        <div className="row">
          <div className="col-md-3">
            {/* <div className="section-header">
              <h2>Additional Images</h2>
            </div> */}
            <input type="file" className='pro-input' id="tkm" name="user_name" multiple />
          </div>
          <div className="col-md-9"></div>
        </div>
        <div className='row description'>
          <div className='col-md-6'>
          <p>Description</p>
          <textarea placeholder='Add the Description'></textarea>
          </div>
          

        </div>
        </div>
      </div>
      <Footer/>
      <nav/>
      </>
   
  );
}

export default Addproduct;
