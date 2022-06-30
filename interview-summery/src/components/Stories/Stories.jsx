import React, { Component } from 'react';
import Slider from 'react-slick';
import './Stories.scss';
import StoriesUser from './StoriesUser';

function SampleNextArrow({ className, style, onClick }) {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow({ className, style, onClick }) {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slider-item">
            <StoriesUser />
          </div>
          <div className="slider-item">
            <StoriesUser />
          </div>
          <div className="slider-item">
            <StoriesUser />
          </div>
          <div className="slider-item">
            <StoriesUser />
          </div>
          <div className="slider-item">
            <StoriesUser />
          </div>
          <div className="slider-item">
            <StoriesUser />
          </div>
          <div className="slider-item">
            <StoriesUser />
          </div>
          <div className="slider-item">
            <StoriesUser />
          </div>
          <div className="slider-item">
            <StoriesUser />
          </div>
          <div className="slider-item">
            <StoriesUser />
          </div>
          <div className="slider-item">
            <StoriesUser />
          </div>
          <div className="slider-item">
            <StoriesUser />
          </div>
        </Slider>
      </div>
    );
  }
}
