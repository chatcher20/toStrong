import { NavLink, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to my portfolio website</h1>
      <p> Feel free to browse around and learn more about me.</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
        corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
        molestias?
      </p>
      <p>
        Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
        corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
        molestias?
      </p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        You can reach me via email: <strong>hello@example.com</strong>
      </p>
    </div>
  );
};

const Main = () => {
  return (
    <Routes>
      <Route exact path="/programs" element={<Home />}></Route>
      <Route path="/library" element={<About />}></Route>
      <Route path="/profile" element={<Contact />}></Route>
    </Routes>
  );
};

export default Main;
