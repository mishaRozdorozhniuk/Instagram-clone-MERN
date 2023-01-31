import React, { useEffect, useState } from 'react';
import Home from '../../icons/Home';
import HeaderAvatar from './header-avatar.jpeg';
import Plus from '../../icons/Plus';
import Populars from '../../icons/Populars';
import Messenger from '../../icons/Messenger';
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { switchAppTheme } from '../../redux/action';
import Like from '../../icons/Like';
import Menu from '../Menu/Menu';

const HeaderList = () => {
  const { switchTheme, theme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const iconCondition = theme === 'dark' ? '#fff' : '#262626';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(switchAppTheme(theme));
  }, [theme]);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <ul className="header__list">
      <li className="header__item">
        <Link to="/">
          <Home theme={iconCondition} />
        </Link>
      </li>
      <li className="header__item">
        <Link to="/messenger">
          <Messenger theme={iconCondition} />
        </Link>
      </li>
      <li className="header__item">
        <Plus theme={iconCondition} />
      </li>
      <li className="header__item">
        <Populars theme={iconCondition} />
      </li>
      <li className="header__item">
        <Like theme={iconCondition} />
      </li>
      <li className="header__item">
        <Link to="/profile">
          <img className="header__avatar" src={HeaderAvatar} alt="avatar" />
        </Link>
      </li>
      <li className="header__item" onClick={handleShowMenu}>
        <span className={theme === 'dark' ? 'header__burger light' : 'header__burger'}></span>
        <span className={theme === 'dark' ? 'header__burger light' : 'header__burger'}></span>
      </li>
      {showMenu && <Menu onClick={switchTheme} />}
    </ul>
  );
};
export default HeaderList;
