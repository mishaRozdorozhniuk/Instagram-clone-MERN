import React from 'react';
import './Menu.scss';
import Settings from '../../icons/Settings';
import SaveIcon from '../Posts/SaveIcon';
import Theme from '../../icons/Theme';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Menu = ({ onClick }) => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.switchTheme.appTheme);
  const iconCondition = theme === 'dark' ? '#fff' : '#000';

  const navigateToSettings = () => {
    navigate('settings');
  };

  const navigateToSavedPosts = () => {
    navigate('savedPosts');
  };

  return (
    <div className="header__menu">
      <div className="menu__item" onClick={navigateToSettings}>
        <span>Настройки</span>
        <Settings theme={iconCondition} />
      </div>
      <div className="menu__item" onClick={navigateToSavedPosts}>
        <span>Сохраненное</span>
        <SaveIcon theme={iconCondition} />
      </div>
      <div className="menu__item" onClick={onClick}>
        <span>Переключить тему</span>
        <Theme theme={iconCondition} />
      </div>
      <div className="menu__item">
        <span>Выйти</span>
      </div>
    </div>
  );
};

export default Menu;
