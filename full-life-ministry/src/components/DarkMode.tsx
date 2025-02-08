interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle = ({
  isDarkMode,
  toggleDarkMode,
}: DarkModeToggleProps) => {
  return (
    <button onClick={toggleDarkMode} className="btn btn-outline-primary">
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
