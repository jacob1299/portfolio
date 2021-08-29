import React from 'react';
import { Nav } from '../src/components/Nav'

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


function App() {
  return (
    <div className="App">
      <Nav links={links}/>

      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
