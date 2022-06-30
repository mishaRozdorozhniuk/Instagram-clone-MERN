import React, { useState } from 'react';
import logo from './Instagram_logo.png';
import SearchIcon from '../../icons/SearchIcon';
import HeaderList from './HeaderList';
import './Header.scss';

const Header = () => {
  const [showSearchIcon, setShowSearchIcon] = useState(true);

  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <img className="header__logo" src={logo} alt="header-logo" />
        </div>
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
