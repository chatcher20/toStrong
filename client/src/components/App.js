import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "../pages/Profile";
import Programs from "../pages/Programs";
import Library from "../pages/Library";
import Friends from "../pages/Friends";
import Graphs from "../pages/Graphs";
import ErrorPage from "../pages/ErrorPage";
import Front from "../pages/Front";
import New from "../pages/New";
import SignIn from "../pages/SignIn";
import Navigation from "./Navigation";
import CurrentProgram from "../pages/CurrentProgram";
import Exercise from "../pages/Exercise";


const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/programs/all" element={<Programs />} />
          <Route path="/programs/:id" element={<CurrentProgram />} />
          <Route path="/programs/:id/:exercise" element={<Exercise />} />
          <Route path="/library" element={<Library />} />
          <Route path="/users/new" element={<New />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/" element={<Front />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Navigation />
      </Router>
    </div>
  );
};

export default App;
