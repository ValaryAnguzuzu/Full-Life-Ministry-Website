interface NavigationProps {
  brand: string;
}

const Navigation = ({ brand }: NavigationProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          {brand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/schedule" className="nav-link">
                Schedule
              </a>
            </li>
            <li className="nav-item">
              <a href="/branches" className="nav-link">
                Branches
              </a>
            </li>
            <li className="nav-item">
              <a href="/donate" className="nav-link">
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
