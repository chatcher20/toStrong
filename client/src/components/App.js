import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.scss";
import Profile from "../pages/Profile.js";
import Programs from "../pages/Programs.js";
import Library from "../pages/Library.js";
import Friends from "../pages/Friends.js";
import ErrorPage from "../pages/ErrorPage.js";
import Front from "../pages/Index.js";
import New from "../pages/New.js";
import SignIn from "../pages/SignIn.js";
import Navigation from "./Navigation.js";
import CurrentProgram from "../pages/CurrentProgram.js";
import Exercise from "../pages/Exercise.js";
import View from "../pages/View.js";
import Header from './Header.js';





const App = () => {



  return (
    <div className='app'>
      <Router>
        <Header />
        <div className='contents'>
        <Routes>
          <Route path="/programs/all" element={<Programs />} />
          <Route path="/programs/:id" element={<CurrentProgram />} />
          <Route path="/programs/:id/:exercise_id" element={<Exercise />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/view" element={<View />} />
          <Route path="/users/new" element={<New />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
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
