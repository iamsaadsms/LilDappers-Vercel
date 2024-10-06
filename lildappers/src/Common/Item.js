
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './Item.css';
import Wrapper from './Wrapper';
import a1 from '../Media/a1.jpg';

const Item = ({ addToCart, toggleSideCart }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [itemimg, setImg] = useState('');
  const [sizeSelected, setSizeSelected] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/items/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch item details');
        }
        const data = await response.json();
        setItem(data[0]); 
 
      } catch (error) {
        console.error('Error fetching item:', error);
        setItem(null);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const alreadyInCart = storedItems.some(item => item.itemId === id);
    setIsAddedToCart(alreadyInCart);
  }, [id]);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleSizeSelect = (size) => {
    setSizeSelected(size);
    setQuantity(1); // Reset quantity when size changes
  };
  const transformImagePath = (path) => {
    const transformedPath = path.replace(/^path\/to\//, '/');
    return transformedPath;
  };

  const handleCartBtnClick = (itemId) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.itemId === itemId && item.size === sizeSelected);
    const availableQuantity = item.sizes.find(size => size.type === sizeSelected).quantity;

    if (quantity > availableQuantity) {
      setErrorMessage(`Cannot add more than ${availableQuantity} of this size.`);
      console.log(errorMessage);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else if (existingItem && existingItem.quantity + quantity > availableQuantity) {
      setErrorMessage(`Cannot add more than ${availableQuantity} of this size.`);
      console.log(errorMessage);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else {
      addToCart({
        itemId,
        size: sizeSelected,
        quantity,
      });

      setIsAddedToCart(true);
    }
  };

  if (!item) return <div>Loading...</div>;

  const Disclaimer = 'Due to the photographic lighting & different screen calibrations, the colors of the original product may slightly vary from the picture.';

  return (
    <div className="Item">
      <Header />
      {errorMessage && <div className="floating-error">{errorMessage}</div>}
      <div className="item-buy">
        <div className="item-images">
          <img className="clothes" src={require('../Media'+transformImagePath(item.img1))}alt="item  1" />
          <img className="clothes" src={require('../Media'+transformImagePath(item.img2))} alt="item  2" />
        </div>
        <div className="item-details">
          <div className="item-name" id="name">
            <h2>{item.name}</h2>
          </div>
          <div className="item-price" id="price">
            RS {item.price}
          </div>
          <div className="item-code">
            <span className="code">SKU:&nbsp;</span>
            <span className="code">{item.code}</span>
          </div>
          <hr />
          <div className="quantity-head">
            <h4>Quantity</h4>
          </div>
          <div className="wrapper">
            <Wrapper quantity={quantity} onQuantityChange={setQuantity} />
          </div>
          <div className="size-head">
            <span className="size">
              <h4>Size</h4>
            </span>
            <a className="size" href="#" id="chart">
              Size Chart
            </a>
          </div>
          <div className="size-buttons" id="size-btns">
            {item.sizes.map((size) => (
              size.quantity > 0 && (
                <button
                  key={size.type}
                  type="button"
                  className={`item-buttons ${sizeSelected === size.type ? 'active' : ''}`}
                  onClick={() => handleSizeSelect(size.type)}
                >
                  <h5>{size.type}</h5>
                </button>
              )
            ))}
          </div>
          <div className="add-to-cart">
            <button
              type="button"
              className="cart-button"
              id="cart-btn"
              onClick={() => handleCartBtnClick(item.id)}
              disabled={sizeSelected === '' || quantity > item.sizes.find(size => size.type === sizeSelected).quantity}
            >
              ADD TO CART
            </button>
          </div>
          <hr />
          <div className="item-description">
            <div className="dropdown-details" onClick={toggleDropdown}>
              <span className="dropdown-desc" id="desc-head">
                DESCRIPTION
              </span>
              <span className="dropdown-desc" id="plus-dropdown">
                {dropdownOpen ? '-' : '+'}
              </span>
            </div>
            <div className={dropdownOpen ? 'dropdown_data open' : 'dropdown_data'}>
              <div className="description-data">
                <span className="bold-titles">Color</span>
                <span className="item-explanation">{item.color}</span>
              </div>
              <div className="description-data">
                <span className="bold-titles">Type</span>
                <span className="item-explanation">{item.type}</span>
              </div>
              <div className="description-data">
                <span className="bold-titles">Fabric</span>
                <span className="item-explanation">{item.fabric}</span>
              </div>
              <div className="description-data">
                <span className="bold-titles">Disclaimer</span>
                <span className="item-explanation">{Disclaimer}</span>
              </div>
              <div className="description-data">
                <span className="bold-titles">Shipping Time</span>
                <span className="item-explanation">{item.shippingTime}</span>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Item;
