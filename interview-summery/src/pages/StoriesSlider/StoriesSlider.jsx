import React, { Component } from 'react';
import Slider from 'react-slick';
import profilePostFoto1 from '../../icons/profPost7.jpeg';
import profilePostFoto2 from '../../icons/profPost8.jpeg';
import profilePostFoto3 from '../../icons/profPost6.jpeg';
import profilePostFoto5 from '../../icons/profPost1.jpeg';
import profilePostFoto6 from '../../icons/profPost7.jpeg';
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
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: '60px',
      className: 'center',
      centerMode: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="ss-wrapper">
        <Slider {...settings}>
          <div className="ss-item">
            <img className="ss-img" src={profilePostFoto1} />;
          </div>
          <div className="ss-item">
            <img className="ss-img" src={profilePostFoto2} />;
          </div>
          <div className="ss-item">
            <img className="ss-img" src={profilePostFoto3} />;
          </div>
          <div className="ss-item">
            <img className="ss-img" src={profilePostFoto6} />;
          </div>
          <div className="ss-item">
            <img className="ss-img" src={profilePostFoto5} />;
          </div>
        </Slider>
      </div>
    );
  }
}
