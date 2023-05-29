import { useState } from "react";

export const Button = ({ name, userLink, color }) => {
  const [link] = useState(userLink);

  const clickButton = () => {
    window.location.href = `${link}`;
  };

  return (
    <button
      className="btn"
      style={{ backgroundColor: `${color}` }}
      onClick={clickButton}
    >
      {name}
    </button>
  );
};
