import Product from './Product';
import './art_full_product.css'

function Art2({ addToCart, addToWishlist, cartItems, setCartItems, onImageClick  }) {

    

    const products = [
        {
          id: 'A1',
          imgSrc: require("./pic1.jpg"),
          altText: "image",
          description: "Travel Art Set, Print San Francisco California",
          originalPrice: 3000,
          salePrice: 2000
        },
        {
          id: 'A2',
          imgSrc: require("./pic2.jpg"),
          altText: "image",
          description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
          originalPrice: 4000,
          salePrice: 3000
        },
        {
          id: 'A3',
          imgSrc: require("./pic3.jpg"),
          altText: "image",
          description: "Dance of Krishna Pichwai Painting",
          originalPrice: 7000,
          salePrice: 6000
        },
        {
          id: 'A4',
          imgSrc: require("./pic4.jpg"),
          altText: "image",
          description: "Divine Ram Darbar 3D Relief Mural",
          originalPrice: 2000,
          salePrice: 1500
        },
        {
          id: 'A5',
          imgSrc: require("./pic5.jpg"),
          altText: "image",
          description: "TIRUPATI BALAJI WITH GODDESS LAXMI",
          originalPrice: 1500,
          salePrice: 2000
        },
        {
          id: 'A6',
          imgSrc: require("./pic1.jpg"),
          altText: "image",
          description: "Travel Art Set, Print San Francisco California",
          originalPrice: 3000,
          salePrice: 2000
        },
        {
          id: 'A7',
          imgSrc: require("./pic1.jpg"),
          altText: "image",
          description: "Travel Art Set, Print San Francisco California",
          originalPrice: 3000,
          salePrice: 2000
        },
      ];
  
    return (
      <div className="category" id='Art2'>
        <h2 style={{ paddingLeft: "0.3cm", paddingTop: "1cm", margin: "0" }}>Art</h2>
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
  
  export default Art2;