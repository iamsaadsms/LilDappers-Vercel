import './Header.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Media/logo.png';
import Dropdown from './Header/Dropdown';
import { Link } from 'react-router-dom';
// Import your images as modules
import a1 from '../Media/a1.jpg';
import a2 from '../Media/a2.jpg';
import a3 from '../Media/a3.jpg';
import a4 from '../Media/a4.jpg';
import a5 from '../Media/a5.jpg';
import aa1 from '../Media/aa1.jpg';
import aa2 from '../Media/aa2.jpg';
import aa3 from '../Media/aa3.jpg';
import aa4 from '../Media/aa4.jpg';
import b1 from '../Media/b1.jpg';
import b2 from '../Media/b2.jpg';
import b3 from '../Media/b3.jpg';
import c1 from '../Media/c1.jpg';
import c2 from '../Media/c2.jpg';
import s1 from '../Media/s1.jpg';
import s2 from '../Media/s2.jpg';
import s3 from '../Media/s3.jpg';
import s4 from '../Media/s4.jpg';

const Header = () => {
    const dropdownData = {
      "NEW ARRIVALS": [
        { title: "New & Featured", items: ["New Arrivals", "Best Sellers"], img: a1, link: 'link1' },
        { title: "Trending", items: ["Men", "Women"], img: a2, link: 'link2' }
      ],
      "BOYS": [
        { title: "Kurta", items: ["Formal", "Casual"], img: b1, link: 'link3' },
        { title: "Kameez Shalwar", items: ["Formal", "Casual"], img: b2, link: 'link4' },
        { title: "Specials", items: ["Bahaar", "Qalb", "Saawariya"], img: b3, link: 'link5' }
      ],
      "GIRLS": [
        { title: "Kurti", items: ["Formal", "Casual"], img: c1, link: 'link6' },
        { title: "Un-Stitched", items: ["1 Piece", "2 Piece", "3 Piece"], img: c2, link: 'link7' },
        { title: "Specials", items: ["Vibrant", "Silk", "Angarkha"], img: aa1, link: 'link8' }
      ],
      "MEN": [
        { title: "Kurta", items: ["Formal", "Casual"], img: s1, link: 'link9' },
        { title: "Kameez Shalwar", items: ["Formal", "Casual"], img: s2, link: 'link10' },
        { title: "Specials", items: ["Like Father Like Son", "Qalb", "Saawariya"], img: s3, link: 'link11' }
      ],
      "WOMEN": [
        { title: "Kurti", items: ["Formal", "Casual"], img: s4, link: 'link12' },
        { title: "Un-Stitched", items: ["1 Piece", "2 Piece", "3 Piece"], img: aa2, link: 'link13' },
        { title: "Specials", items: ["Nur", "Motia", "Chandni"], img: aa3, link: 'link14' }
      ]
    };
  
    const navbarStyle = {
      backgroundColor: '#5f6e7c', // Change to your desired background color
      // Other styles
    };
    let CategoryChecker=(category)=>{
      if (category === "GIRLS") {
        return "/Girls";
      } else if (category === "BOYS") {
        return "/Boys";
      } else if (category === "MEN") {
        return "/Men";
      } else if (category === "WOMEN") {
        return "/Women";
      } else {
        return "#";
      }    }
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-inverse bg-secondary " style={navbarStyle}>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className='logo' />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item nav-head">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              {Object.keys(dropdownData).map((category, index) => (
                <li key={index} className="nav-item dropdown nav-head">
                  <Link
                    className="nav-link "
                    to={CategoryChecker(category)}
                    id={`navbarDropdown${index}`}
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {category}
                  </Link>
                  <div className="dropdown-menu" aria-labelledby={`navbarDropdown${index}`}>
                    <Dropdown data={dropdownData[category]} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Header;