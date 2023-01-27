import React from 'react';

const NickName = ({ nameOfUser, className }) => {
  return (
    <span>
      <a className={className || 'rec__current-nick'} href="#">
        {nameOfUser}
      </a>
    </span>
  );
};

export default NickName;
