
import { AboutMe } from './aboutme';
import { Home } from './home';

function App() {

  return (
    <>
      <div className='flex justify-center absolute z-50 left-1/2'>
        <ul className='navbar mx-4 py-2 px-8 flex rounded-lg justify-between fixed'>
          <li onClick={Home}>Home</li>
          <li onClick={AboutMe}>About me</li>
          <li>Experience</li>
          <li>Education</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <Home />
      <AboutMe />
    </>
  )
}

export default App
