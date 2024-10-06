import React from "react";
import './ImagesHome.css';
import Button from './Button';

const ImagesHome = ({ data, style }) => {
  return (
    <div className="ImagesHome">
      <div className="img-home">
        <div className="left-img">
          <img src={data[0].img} alt={data[0].msg} className="img1" />
          <Button data={data[0].msg} className="carousel-button1" style={style.carouselButton1} />
        </div>
        <div className="right-imgs">
          {data.slice(1).map((sub, index) => (
            <div key={index} className="images-div">
              <img src={sub.img} alt={sub.msg} className={`img${index + 2}`} />
              <Button data={sub.msg} className={`carousel-button${index + 2}`} style={style[`carouselButton${index + 2}`]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImagesHome;
