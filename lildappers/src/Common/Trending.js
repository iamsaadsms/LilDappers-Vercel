import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './Trending.css'; 


const Trending = ({trendImages, trendItems, style}) => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 4;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const totalSlides = Math.ceil(trendImages.length / itemsPerPage);

  const slides = Array.from({ length: totalSlides }, (_, slideIndex) => (
    <Carousel.Item key={slideIndex}>
      <div className="row justify-content-center">
        {trendImages.slice(slideIndex * itemsPerPage, slideIndex * itemsPerPage + itemsPerPage).map((image, idx) => (
          <div className={`col-xs-3 ${index !== slideIndex ? 'hidden' : ''}`} key={slideIndex * itemsPerPage + idx}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${slideIndex * itemsPerPage + idx + 1}`}
            />
            <div className="item-details">
              <span className='t-name'>{trendItems[slideIndex * itemsPerPage + idx].name}</span>
            </div>
            <div className="item-details d-p">
              <span className='t-price'>{trendItems[slideIndex * itemsPerPage + idx].price}</span>
            </div>
          </div>
        ))}
      </div>
    </Carousel.Item>
  ));

  const next = () => {
    if (index < totalSlides - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <Container className="Trending">
      <div className='trending-head'>
        <span className='t-head'>TRENDING</span>
        <hr />
      </div>
      <div className='carousel-articles'>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} controls={false}>
          {slides}
        </Carousel>
        <a className={`carousel-control-prev ${index === 0 ? 'hidden' : ''}`} onClick={prev} role="button" style={style}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className={`carousel-control-next ${index === totalSlides - 1 ? 'hidden' : ''}`} onClick={next} role="button" style={style}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </Container>
  );
};

export default Trending;
