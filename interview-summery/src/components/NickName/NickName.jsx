import React from 'react';
import useTheme from '../../hooks/useLocalStorage';

const NickName = ({ nameOfUser, className }) => {
  const { theme } = useTheme();

  return (
    <span>
      <a data-theme={theme} className={className || 'rec__current-nick'} href="#">
        {nameOfUser}
      </a>
    </span>
  );
};

export default NickName;
