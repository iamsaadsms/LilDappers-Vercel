import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SideCart.css';
import Wrapper from './Wrapper';

const SideCart = ({ isActive, toggleSideCart, updateCartItemQuantity, removeCartItem, cartItems }) => {
  const [fetchedCartItems, setFetchedCartItems] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchCartItems = async () => {
      const storedItems = cartItems || [];
      try {
        const fetchedItems = await Promise.all(
          storedItems.map(async (storedItem) => {
            try {
              const response = await fetch(`http://localhost:5000/api/items/${storedItem.itemId}`);
              if (!response.ok) {
                throw new Error('Failed to fetch item details');
              }
              const itemData = await response.json();
              return { ...itemData[0], size: storedItem.size, quantity: storedItem.quantity };
            } catch (error) {
              console.error(`Error fetching item ${storedItem.itemId}:`, error);
              return null; // Return null for failed fetch
            }
          })
        );
        const filteredItems = fetchedItems.filter(item => item !== null);
        setFetchedCartItems(filteredItems);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setFetchedCartItems([]); // Handle error scenario by resetting cartItems state
      }
    };

    fetchCartItems();
  }, [cartItems]);

  const totalPrice = fetchedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const transformImagePath = (path) => {
    // Adjust if necessary based on your project structure
    const transformedPath = path.replace(/^path\/to\//, '/');
    console.log(`Transformed Path: ${transformedPath}`);
    return transformedPath;
  };

  const handleViewCart = () => {
    navigate('/cart'); // Navigate to /cart
  };

  return (
    <div className={`side-cart ${isActive ? 'active' : ''}`}>
      <div className="side-header">
        <span className="side-head">CART</span>
        <span className="side-head cart-cross" id="side-cross" onClick={toggleSideCart}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
          </svg>
        </span>
      </div>
      <div className="cart-content">
        <div className="items-selected" id="items-selected-cart">
          {fetchedCartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            fetchedCartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={require(`../Media${transformImagePath(item.img1)}`)} alt={item.name} className="img-item" />
                <div className="items-in-cart">
                  <span className='i-detail i-n'>{item.name}</span>
                  <span className='i-detail'>Quantity: {item.quantity}</span>
                  <span className='i-detail'>Price: {item.price}</span>
                  <span className='i-detail'>Size: {item.size}</span>
                  <Wrapper
                    quantity={item.quantity}
                    onQuantityChange={(newQuantity) => updateCartItemQuantity(item.id, item.size, newQuantity)}
                  />
                  <button onClick={() => removeCartItem(item.id, item.size)} className='remove-btn'>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <hr/>
      <div className="cart-total">
        <span className="total-head">Total: </span>
        <span className="total-amount">RS {totalPrice.toFixed(2)}</span>
      </div>
      <div className="checkout-cart">
        <div className="view-cart">
          <button type="submit" className="cart-btns" id="view-cart-btn" onClick={handleViewCart}>VIEW CART</button>
        </div>
        <div className="checkout">
          <button type="submit" className="cart-btns" id="checkout-btn">GO TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
