import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import aa2 from '../Media/aa2.jpg';
import aa3 from '../Media/aa3.jpg';
import c1 from '../Media/c1.jpg';
import c2 from '../Media/c2.jpg';
import './Carousel.css';
import Button from '../Common/Button';

const Carousel = () => {
    let images = [
        {
            img: aa2
        },
        {
            img: aa3
        },
        {
            img: c1
        },
        {
            img: c2
        }
    ]

    const buttonText = "SHOP NOW";

  return (
    <Splide
      options={{
        type      : 'loop',
        perPage   : 1,
        perMove   : 1,
        autoplay  : true,
        interval  : 3000,
        pagination: false,
        arrows    : true,
      }}
    >
        {images.map((sub, index) => (
            <SplideSlide key={index}>
                <img src={sub.img} alt='Slide' className='Carousel-img'/>
                <Button data={buttonText} className='carousel-button' />
            </SplideSlide>
        ))}
    </Splide>
  );
};

export default Carousel;
