import React from 'react';
import SliderStories from './StoriesSlider';
import './StoriesSlider.scss';

const SloriesSliderPage = () => {
  return (
    <section className="ss-page">
      <div className="ss-cross">
        <span className="ss-cross-item"></span>
        <span className="ss-cross-item"></span>
      </div>

      <SliderStories />
    </section>
  );
};

export default SloriesSliderPage;
