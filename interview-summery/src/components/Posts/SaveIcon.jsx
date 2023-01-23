import React from 'react';

export default function SaveIcon({ remove, theme }) {
  return (
    <svg
      aria-label="Save"
      className="saveIcon"
      color={theme}
      fill="#000"
      height="34"
      role="img"
      viewBox="0 0 24 24"
      width="34">
      <polygon
        fill={remove ? '#000' : 'none'}
        color={remove ? '#000' : 'none'}
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"></polygon>
    </svg>
  );
}
