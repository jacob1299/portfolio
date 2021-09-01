import React from 'react';
import { Nav } from '../src/components/Nav'
import { Footer } from '../src/components/Footer'

const links = [
  {
    title: 'Home', 
    to: '/'
  }, 
  {
    title: 'Bio', 
    to: '/Bio'
  }, 
  {
    title: 'Contact', 
    to: '/Contact'
  }
]

const footerProps = [
  {
      link: 'https://github.com/jacob1299', 
      image: 'https://www.nicepng.com/png/detail/50-508899_linkedin-icon-thumbnail.png'
  }, 
  {
      link: 'www.linkedin.com/in/jacob-badolato',
      image: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'
  }, 
  {
      link: '', 
      image: ''
  }
]


function App() {
  return (
    <div className="flex flex-col h-screen">
      <Nav links={links}/>
      <Footer footerItems={footerProps}/>
    </div>
  );
}

export default App;
