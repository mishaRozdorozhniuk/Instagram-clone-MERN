import React from 'react';

export default function Share({ theme }) {
  return (
    <svg
      aria-label="Поделиться публикацией"
      className="share"
      color={theme}
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 2 26 20"
      width="24">
      <line
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"></line>
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"></polygon>
    </svg>
  );
}
