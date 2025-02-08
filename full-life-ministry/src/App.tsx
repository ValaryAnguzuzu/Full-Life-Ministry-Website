import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import DarkModeToggle from "./components/DarkMode";
import Carousel from "./components/Carousel";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import AboutUs from "./pages/AboutUs";
import Branches from "./pages/Branches";
import Fellowships from "./pages/Fellowships";
import Discipleship from "./pages/Discipleship";
import Donate from "./pages/Donate";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <DarkModeToggle isDarkMode={false} toggleDarkMode={() => {}} />
      <Navigation brand="Full Life Ministry" />
      <Carousel images={[]} />
      <div className="container mt-5 pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/fellowships" element={<Fellowships />} />
          <Route path="/discipleship" element={<Discipleship />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
