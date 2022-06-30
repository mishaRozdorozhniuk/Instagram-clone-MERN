import React from 'react';
import NickName from '../NickName/NickName';
import StoriesUser from '../Stories/StoriesUser';
import './RecommendationUser.scss';

const RecommendationUser = ({ additionalRecInfo, nameOfRecUser }) => {
  return (
    <div className="rec__user">
      <div className="">
        <StoriesUser size={true} />
      </div>
      <div className="rec__user-info">
        <NickName nameOfUser={nameOfRecUser} />
        <p className="rec__subscribe-add">{additionalRecInfo}</p>
      </div>
      <button className="rec__subscribe">Подписаться</button>
    </div>
  );
};

export default RecommendationUser;
