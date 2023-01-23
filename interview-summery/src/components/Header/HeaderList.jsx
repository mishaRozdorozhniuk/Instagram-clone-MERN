import React, { useEffect } from 'react';
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

const HeaderList = () => {
  const { switchTheme, theme } = useTheme();
  const iconCondition = theme === 'dark' ? '#fff' : '#262626';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(switchAppTheme(theme));
  }, [theme]);

  return (
    <ul className="header__list">
      <li className="header__item">
        <Link to="/">
          <Home />
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
      <li className="header__item" onClick={switchTheme}>
        <span className="header__burger"></span>
        <span className="header__burger"></span>
      </li>
    </ul>
  );
};
export default HeaderList;
