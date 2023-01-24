import React, { useState } from 'react';
import logo from './Instagram_logo.png';
import lightLogo from './Logo-Instagram.png';
import SearchIcon from '../../icons/SearchIcon';
import HeaderList from './HeaderList';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header = () => {
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const theme = useSelector((state) => state.switchTheme.appTheme);

  const iconCondition = theme === 'dark' ? lightLogo : logo;

  return (
    <header className={theme === 'dark' ? 'header header__dark ' : 'header header__light'}>
      <div className="header__inner">
        <div>{<img className="header__logo" src={iconCondition} alt="header-logo" />}</div>
        <div className="header-section">
          <div className="header__search">
            {showSearchIcon ? <SearchIcon /> : null}
            <input
              onFocus={() => setShowSearchIcon(false)}
              onBlur={() => setShowSearchIcon(true)}
              placeholder="Поиск"
              className="header__input"
              type="text"
            />
          </div>
          <HeaderList />
        </div>
      </div>
    </header>
  );
};

export default Header;
