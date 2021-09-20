import React from "react";
import { Nav } from "../src/components/Nav";
import { Footer } from "../src/components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Bio } from "./pages/Bio/Bio";
import { Contact } from "./pages/Contact/Contact";
import { Jokes } from "./pages/Jokes/Jokes";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const links = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Bio",
    to: "/bio",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];

const footerProps = [
  {
    link: "https://github.com/jacob1299",
    Icon: FaGithub,
  },
  {
    link: "https://www.linkedin.com/in/jacob-badolato",
    Icon: GrLinkedin,
  },
  {
    link: "https://www.instagram.com/jacob__1299/",
    Icon: FiInstagram,
  },
];

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Router>
        <Nav links={links} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bio">
            <Bio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/jokes">
            <Jokes />
          </Route>
        </Switch>
        <Footer footerItems={footerProps} />
      </Router>
    </div>
  );
}

export default App;
