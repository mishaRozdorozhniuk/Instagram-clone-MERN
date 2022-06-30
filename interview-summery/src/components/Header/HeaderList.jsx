import React from 'react';
import Home from '../../icons/Home';
import HeaderAvatar from './header-avatar.jpeg';
import likeIcon from '../../icons/like.png';
import Plus from '../../icons/Plus';
import Populars from '../../icons/Populars';
import Messenger from '../../icons/Messenger';
import { Link } from 'react-router-dom';

const HeaderList = () => {
  return (
    <ul className="header__list">
      <li className="header__item">
        <Link to="/">
          <Home />
        </Link>
      </li>
      <li className="header__item">
        <Link to="/messenger">
          <Messenger />
        </Link>
      </li>
      <li className="header__item">
        <Plus />
      </li>
      <li className="header__item">
        <Populars />
      </li>
      <li className="header__item">
        <img className="like-icon" src={likeIcon} alt="direct-message-icon" />
      </li>
      <li className="header__item">
        <Link to="/profile">
          <img className="header__avatar" src={HeaderAvatar} alt="avatar" />
        </Link>
      </li>
    </ul>
  );
};
export default HeaderList;
