import { Link } from "react-router-dom";

const Navigation = ({ brand }: { brand: string }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {brand}
        </Link>
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
              <Link to="/about" className="nav-link">
                AboutUs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/schedule" className="nav-link">
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/branches" className="nav-link">
                Branches
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fellowships" className="nav-link">
                Fellowships
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/donate" className="nav-link">
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
