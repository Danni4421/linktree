import { useState } from 'react';

export const Button = ({ name, userLink, color, isLight }) => {
  const [link] = useState(userLink);

  const clickButton = () => {
    window.location.href = `${link}`;
  };

  return (
    <button
      className="btn"
      style={{
        backgroundColor: `${color ? color : 'ffffff'}`,
        color: `#${isLight ? 'eaeaea' : '000000'}`,
        fontSize: '1.6rem',
        fontWeight: 500,
        fontFamily: 'monospace',
        letterSpacing: '1px',
      }}
      onClick={clickButton}
    >
      {name}
    </button>
  );
};
