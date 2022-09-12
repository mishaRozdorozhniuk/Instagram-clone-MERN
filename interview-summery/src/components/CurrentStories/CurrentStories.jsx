import React from 'react';
import { Link } from 'react-router-dom';
import './CurrentStories.scss';

const CurrentStories = ({ currentStoriesPhoto, acticeStoriesText, activeStories }) => {
  return (
    <Link className="stories-link" to="/stories">
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
    </Link>
  );
};

export default CurrentStories;
