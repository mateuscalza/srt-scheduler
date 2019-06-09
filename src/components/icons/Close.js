import React from 'react';

export default function Close(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className="close"
      {...props}
    >
      <g fill="#FF0000">
        <path d="M56.7 15.3l-8-8c-.4-.4-1-.4-1.4 0L32 22.6 16.7 7.3c-.4-.4-1-.4-1.4 0l-8 8c-.4.4-.4 1 0 1.4L22.6 32 7.3 47.3c-.4.4-.4 1 0 1.4l8 8c.4.4 1 .4 1.4 0L32 41.4l15.3 15.3c.2.2.5.3.7.3s.5-.1.7-.3l8-8c.4-.4.4-1 0-1.4L41.4 32l15.3-15.3c.4-.4.4-1 0-1.4z" />
      </g>
    </svg>
  );
}
