interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle = ({
  isDarkMode,
  toggleDarkMode,
}: DarkModeToggleProps) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`btn ${
        isDarkMode ? "btn-dark" : "btn-light"
      } end-0 m-3`}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
