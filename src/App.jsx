import './App.css'
import {Header} from './components/header.jsx'
import {Presentation} from './components/presentation.jsx'
import {AboutMe} from './components/aboutMe.jsx'
import { Skills } from './components/skills.jsx'

function App() {
  return (
    <main className="main">
      <Header />
      <aside className='aside'>
        <ul>
          <li><a href='#'><i class="fa-brands fa-github fa-2xl iconGithub"></i></a></li>
          <li><a href='#'><i class="fa-brands fa-linkedin fa-2xl iconLinkedin"></i></a></li>
          <li><a href='#'><i class="fa-brands fa-instagram fa-2xl iconInstagram"></i></a></li>
          <li><a href='#'><i class="fa-brands fa-facebook fa-2xl iconFacebook"></i></a></li>
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
