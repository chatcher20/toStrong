import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.scss";
import Profile from "../pages/Profile";
import Programs from "../pages/Programs";
import Library from "../pages/Library";
import Friends from "../pages/Friends";
import Graphs from "../pages/Graphs";
import ErrorPage from "../pages/ErrorPage";
import Front from "../pages/Index";
import New from "../pages/New";
import SignIn from "../pages/SignIn";
import Navigation from "./Navigation";
import CurrentProgram from "../pages/CurrentProgram";
import Exercise from "../pages/Exercise";
import View from "../pages/View";
import Header from './Header';





const App = () => {



  return (
    <div className='app'>
      <Router>
        <Header />
        <div className='contents'>
        <Routes>
          <Route path="/programs/all" element={<Programs />} />
          <Route path="/programs/:id" element={<CurrentProgram />} />
          <Route path="/programs/:id/:workout_id" element={<Exercise />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/view" element={<View />} />
          <Route path="/users/new" element={<New />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/" element={<Front />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </div>
        <Navigation />
      </Router>
    </div>
  );
};

export default App;
