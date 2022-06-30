import React from 'react';
import './CurrentStories.scss';

const CurrentStories = ({ currentStoriesPhoto, acticeStoriesText, activeStories }) => {
  return (
    <div className="current-stories-wrapper">
      <div className="current-stories-inner">
        <img
          className={activeStories ? 'current-stories' : 'current-stories active'}
          src={currentStoriesPhoto}
          alt="current-stories"
        />
      </div>
      <span className="current-stories-text">{acticeStoriesText}</span>
    </div>
  );
};

export default CurrentStories;
