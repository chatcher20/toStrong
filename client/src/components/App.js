import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "../pages/Profile";
import Programs from "../pages/Programs";
import Library from "../pages/Library";
import Friends from "../pages/Friends";
import Graphs from "../pages/Graphs";
import ErrorPage from "../pages/ErrorPage";
import Front from "../pages/Front";

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/programs" element={<Programs />} />
          <Route path="/library" element={<Library />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/front" element={<Front />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <nav>
          <ul>
            <li>
              <Link to="/programs"> Programs </Link>
            </li>
            <li>
              <Link to="/library"> Library </Link>
            </li>
            <li>
              {" "}
              <Link to="/profile/:id"> Profile </Link>
            </li>
            <li>
              <Link to="/friends"> Friends </Link>
            </li>
            <li>
              <Link to="/graphs"> Graphs </Link>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
};

export default App;
