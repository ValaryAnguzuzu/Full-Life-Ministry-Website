import React, { useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-dark", !darkMode);
    document.body.classList.toggle("text-white", !darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="btn btn-secondary position-fixed top-0 end-0 m-3"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
