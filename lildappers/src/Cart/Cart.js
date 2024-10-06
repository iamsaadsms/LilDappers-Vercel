import React from 'react';
import './Cart.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Wrapper from '../Common/Wrapper';

const Cart = ({ cartItems, updateCartItemQuantity, removeCartItem, sideCartItems }) => {
  const processedCartItems = sideCartItems(cartItems); // Transform cart items

  const totalPrice = processedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const transformImagePath = (path) => {
    const transformedPath = path.replace(/^path\/to\//, '/');
    console.log(`Transformed Path: ${transformedPath}`);
    return transformedPath;
  };

  return (
    <div className="Cart">
      <Header />
      <div className="cart-h">
        <span className="cart-head">CART</span>
      </div>
      <div className="product-h">
        <div className="p-l">
          <span className="p-h">PRODUCT</span>
        </div>
        <div className="p-r">
          <span className="p-h">QUANTITY</span>
          <span className="p-h">TOTAL</span>
        </div>
      </div>
      <hr style={{ margin: "0 17vw", marginTop: "1vh" }} />
      <div className="cart-content-final">
        {processedCartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          processedCartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              {item.imgSrc ? (
                <img src={require(`../Media${transformImagePath(item.imgSrc)}`)} alt={item.name} className="img-item" />
              ) : (
                <p>Image not available</p>
              )}
              <div className='items-divs'>
                <div className="items-in-cart">
                  <span className='i-detail i-n'>{item.name}</span>
                  <span className='i-detail'>Price: {item.price}</span>
                  <span className='i-detail'>Size: {item.size}</span>
                  <button
                    onClick={() => removeCartItem(item.id, item.size)}
                    className='remove-btn'
                  >
                    Remove
                  </button>
                </div>
                <div className='cart-right'>
                  <div className='cart-qty'>
                    <span className='i-detail'>Quantity: {item.quantity}</span>
                    <Wrapper
                      quantity={item.quantity}
                      onQuantityChange={(newQuantity) => updateCartItemQuantity(item.id, item.size, newQuantity)}
                    />
                  </div>
                  <div className='cart-total'>
                    <span className='i-total'>RS {item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Cart;
