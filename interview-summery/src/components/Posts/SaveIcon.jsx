import React from 'react';

export default function SaveIcon({ savePost }) {
  return (
    <svg
      aria-label="Save"
      class="saveIcon"
      color="#000"
      fill="#000"
      height="34"
      role="img"
      viewBox="0 0 24 24"
      width="34"
    >
      <polygon
        fill={savePost ? '#000' : 'none'}
        color={savePost ? '#000' : 'none'}
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></polygon>
    </svg>
  );
}
