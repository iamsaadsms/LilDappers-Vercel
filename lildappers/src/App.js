import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Girls from './Girls/Girls';
import Articles from "./Common/Articles";
import Item from './Common/Item';
import SideCart from './Common/SideCart';
import Boys from './Boys/Boys';
import Men from './Men/Men';
import Women from './Women/Women';
import Cart from './Cart/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isSideCartActive, setIsSideCartActive] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.itemId === newItem.itemId && item.size === newItem.size);
      if (!existingItem) {
        return [...prevItems, newItem];
      }
      return prevItems;
    });
    setIsSideCartActive(true); // Automatically open side cart when an item is added
  };

  const updateCartItemQuantity = (itemId, size, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.itemId === itemId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeCartItem = (itemId, size) => {
    setCartItems(prevItems =>
      prevItems.filter(item => !(item.itemId === itemId && item.size === size))
    );
  };

  const toggleSideCart = () => {
    setIsSideCartActive(prevState => !prevState);
  };

  const sideCartItems = (cartItems) => {
    return cartItems.map((item) => ({
      id: item.itemId,
      name: item.name,
      imgSrc: item.img1, // Assuming img1 contains the image path
      quantity: item.quantity,
      price: item.price,
      size: item.size,
    }));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/girls" element={<Girls />} />
          <Route path="/boys" element={<Boys />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/item/:id" element={<Item addToCart={addToCart} toggleSideCart={toggleSideCart} />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} removeCartItem={removeCartItem} updateCartItemQuantity={updateCartItemQuantity} sideCartItems={sideCartItems} />} />
        </Routes>
        <SideCart
          isActive={isSideCartActive}
          cartItems={cartItems}
          toggleSideCart={toggleSideCart}
          updateCartItemQuantity={updateCartItemQuantity}
          removeCartItem={removeCartItem}
          sideCartItems={sideCartItems} // Pass to SideCart if needed
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
