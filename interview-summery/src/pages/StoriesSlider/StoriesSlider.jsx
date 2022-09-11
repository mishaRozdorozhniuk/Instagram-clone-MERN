import React, { Component } from 'react';
import Slider from 'react-slick';
import StoriesSliderItem from '../../components/StoriesSliderItem/StoriesSliderItem';
import './StoriesSlider.scss';

function SampleNextArrow({ className, style, onClick }) {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow({ className, style, onClick }) {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

export default class SliderStories extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="ss-wrapper">
        <Slider {...settings}>
          <div className="ss-item">
            <StoriesSliderItem />
          </div>
          <div className="ss-item">
            <StoriesSliderItem />
          </div>
          <div className="ss-item">
            <StoriesSliderItem />
          </div>
        </Slider>
      </div>
    );
  }
}
