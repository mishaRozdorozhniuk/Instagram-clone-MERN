import React from 'react';

export default function Comments({ theme }) {
  return (
    <svg
      aria-label="Комментировать"
      className="comments-icon-footer"
      color={theme}
      fill="#8e8e8e"
      height="24"
      role="img"
      viewBox="10 0 7 22"
      width="24">
      <path
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"></path>
    </svg>
  );
}
