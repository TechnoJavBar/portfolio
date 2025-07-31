import './App.css'
import {Header} from './components/header.jsx'
import {Presentation} from './components/presentation.jsx'
import {AboutMe} from './components/aboutMe.jsx'
import { Skills } from './components/skills.jsx'
import {FaGithub, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'

function App() {
  return (
    <main className="main">
      <Header />
      <aside className='aside'>
        <ul>
          <li><a href='#'><FaGithub /></a></li>
          <li><a href='#'><FaLinkedin /></a></li>
          <li><a href='#'><FaInstagram /></a></li>
          <li><a href='#'><FaFacebook /></a></li>
        </ul>
      </aside>
      <br />
      <section className='section'>
        <Presentation />
      </section>
      <section className='section'>
        <AboutMe />
      </section>
      <Skills />
    </main>
  )
}

export default App
