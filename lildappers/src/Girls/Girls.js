import React from "react";
import './Girls.css';
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Categories from "../Common/Categories";
import Trending from "../Common/Trending";
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


const Girls = () => {
  const cat = [
    {
      name: "STITCHED",
      img: a1
    },
    {
      name: "UN-STITCHED",
      img: a2
    },
    {
      name: "KURTI",
      img: a3
    },
    {
      name: "SPECIALS",
      img: a4
    },
  ];

  const text = "SHOP NOW";

  const images = [
    a1, a2, a3, a4, a5,
    aa1, aa2, aa3, aa4,
    b1, b2, b3, c1, c2,
    s1, s2
  ];
  
  const items = [
    {
      name: "ALPHA",
      price: "$5,000.00"
    },
    {
      name: "BETA",
      price: "$6,000.00"
    },
    {
      name: "ECHO",
      price: "$7,000.00"
    },
    {
      name: "DELTA",
      price: "$8,000.00"
    },
    {
      name: "RED",
      price: "$9,000.00"
    },
    {
      name: "BLUE",
      price: "$10,000.00"
    },
    {
      name: "GREEN",
      price: "$1,500.00"
    },
    {
      name: "VIOLET",
      price: "$2,000.00"
    },
    {
      name: "WHITE",
      price: "$2,500.00"
    },
    {
      name: "PLAY",
      price: "$3,000.00"
    },
    {
      name: "STOP",
      price: "$3,500.00"
    },
    {
      name: "SUMMER",
      price: "$4,000.00"
    },
    {
      name: "SPRING",
      price: "$4,500.00"
    },
    {
      name: "AUTUMN",
      price: "$5,000.00"
    },
    {
      name: "WINTER",
      price: "$5,500.00"
    },
    {
      name: "FALL",
      price: "$6,500.00"
    },
  ];

  const carouselstyle = {
    width: '5%',
    top: '295vh',
  };


  return (
    <div className="Girls">
      <Header />
      <Categories
        category={cat}
        textBtn={text}
        Section="Girls"
      />
      <Trending trendItems={items} trendImages={images} style={carouselstyle} />
      <Footer />
    </div>
  );
};

export default Girls;
