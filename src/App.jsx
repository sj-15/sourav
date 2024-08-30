import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Home from './home';
import AboutMe from './aboutme';
import Experience from './experience';
import './App.css';
function App() {
  return (
    <>
      <div className='flex justify-center w-full'>
        <ul className='navbar mx-4 py-2 px-8 flex rounded-lg justify-between'>
          <li><Link smooth to="#home">Home</Link></li>
          <li><Link smooth to="#aboutme">About Me</Link></li>
          <li><Link smooth to="#experience">Experience</Link></li>
          {/* Add other links similarly */}
        </ul>
      </div>

      <div className="content">
        <section id="home">
          <Home />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="experience">
          <Experience />
        </section>
        {/* Add other sections similarly */}
      </div>
    </>
  );
}

export default App;
