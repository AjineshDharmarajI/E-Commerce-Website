import Product from './Product';
import './Aesthectics_full_product.css'

function Aesthectics_Full({ addToCart, addToWishlist, cartItems, setCartItems, onImageClick  }) {

    

    const products = [
        {
          id:'AE1',
          imgSrc: require("./background.jpg"),
          altText: "image",
          description: "Travel Art Set, Print San Francisco California",
          originalPrice: 8000,
          salePrice: 7500
        },
        {
          id:'AE2',
          imgSrc: require("./Bu-2.jpg"),
          altText: "image",
          description: "Divine Ram Darbar 3D Relief Mural",
          originalPrice: 1000,
          salePrice: 500
        },
        {
          id:'AE3',
          imgSrc: require("./pic4.jpg"),
          altText: "image",
          description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
          originalPrice: 2500,
          salePrice: 2000
        },
        {
          id:'AE4',
          imgSrc: require("./pic7.jpg"),
          altText: "image",
          description: "Dance of Krishna Pichwai Painting",
          originalPrice: 4000,
          salePrice: 3000
        },
        {
          id:'AE5',
          imgSrc: require("./pic2.jpg"),
          altText: "image",
          description: "Divine Ram Darbar 3D Relief Mural",
          originalPrice: 5000,
          salePrice: 4000
        },
        {
          id:'AE6',
          imgSrc: require("./pic2.jpg"),
          altText: "image",
          description: "Divine Ram Darbar 3D Relief Mural",
          originalPrice: 5000,
          salePrice: 4000
        },
        {
          id:'AE7',
          imgSrc: require("./pic2.jpg"),
          altText: "image",
          description: "Divine Ram Darbar 3D Relief Mural",
          originalPrice: 5000,
          salePrice: 4000
        },
        {
          id:'AE8',
          imgSrc: require("./pic2.jpg"),
          altText: "image",
          description: "Divine Ram Darbar 3D Relief Mural",
          originalPrice: 5000,
          salePrice: 4000
        },
        
      ];
  
    return (
      <div className="category" id='Aesthectics2'>
        <h2 style={{ paddingLeft: "0.3cm", paddingTop: "1cm", margin: "0" }}>Aesthectics</h2>
        <hr />
        <div className="product-grid">
          {products.map((product, index) => (
            <Product
              key={index}
              {...product}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              cartItems={cartItems}
              setCartItems={setCartItems}
              onImageClick={onImageClick}
            />
          ))}
          
        </div>
      </div>
    );
  }
  
  export default Aesthectics_Full;