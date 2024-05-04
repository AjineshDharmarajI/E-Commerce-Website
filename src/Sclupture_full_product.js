import Product from './Product';
import './Sclupture_full_product.css'

function Sclupture_Full({ addToCart, addToWishlist, cartItems, setCartItems, onImageClick  }) {

    

    const products = [
        {
          id:'S1',
          imgSrc: require("./pic6.jpg"),
          altText: "image",
          description: "Travel Art Set, Print San Francisco California",
          originalPrice: 5000,
          salePrice: 4000
        },
        {
          id:'S2',
          imgSrc: require("./pic7.jpg"),
          altText: "image",
          description: "Divine Ram Darbar 3D Relief Mural",
          originalPrice: 6000,
          salePrice: 5500
        },
        {
          id:'S3',
          imgSrc: require("./pic8.jpg"),
          altText: "image",
          description: "Dance of Krishna Pichwai Painting",
          originalPrice: 9000,
          salePrice: 8000
        },
        {
          id:'S4',
          imgSrc: require("./pic9.jpg"),
          altText: "image",
          description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
          originalPrice: 7000,
          salePrice: 6000
        },
        {
          id:'S5',
          imgSrc: require("./pic10.jpg"),
          altText: "image",
          description: "Divine Ram Darbar 3D Relief Mural",
          originalPrice: 6000,
          salePrice: 5500
        },
        {
          id:'S6',
          imgSrc: require("./pic10.jpg"),
          altText: "image",
          description: "Divine Ram Darbar 3D Relief Mural",
          originalPrice: 6000,
          salePrice: 5500
        },
        {
          id:'S7',
          imgSrc: require("./pic10.jpg"),
          altText: "image",
          description: "Divine Ram Darbar 3D Relief Mural",
          originalPrice: 6000,
          salePrice: 5500
        },
        {
          id:'S8',
          imgSrc: require("./pic10.jpg"),
          altText: "image",
          description: "Divine Ram Darbar 3D Relief Mural",
          originalPrice: 6000,
          salePrice: 5500
        },
        
      ];
  
    return (
      <div className="category" id='Literature2'>
        <h2 style={{ paddingLeft: "0.3cm", paddingTop: "1cm", margin: "0" }}>Sclupture</h2>
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
  
  export default Sclupture_Full;