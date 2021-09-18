import React from 'react'
import { Nav } from '../src/components/Nav'
import { Footer } from '../src/components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { Home } from './pages/Home/Home'
import { Bio } from './pages/Bio/Bio'
import { Contact } from './pages/Contact/Contact'
import { Jokes } from './pages/Jokes/Jokes'
import instagram from './assets/instagram_b&w.png'
import linkedin from './assets/linkedin_b&w.png'
import github from './assets/github_b&w.png'


const links = [
  {
    title: 'Home', 
    to: '/'
  }, 
  {
    title: 'Bio', 
    to: '/bio'
  }, 
  {
    title: 'Contact', 
    to: '/contact'
  }
]

const footerProps = [
  {
      link: 'https://github.com/jacob1299', 
      image: github
  }, 
  {
      link: 'www.linkedin.com/in/jacob-badolato',
      image: linkedin
  }, 
  {
      link: 'https://www.instagram.com/jacob__1299/', 
      image: instagram
  }
]


function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Router>
        <Nav links={links}/>
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
        <Footer footerItems={footerProps}/>
      </Router>
    </div>
  );
}

export default App;
