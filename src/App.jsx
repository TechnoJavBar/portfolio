import './App.css'
import {Header} from './components/header.jsx'
import {Presentation} from './components/presentation.jsx'

function App() {
  return (
    <main className="main">
      <Header />
      <aside className='aside'>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </aside>
      <section className='section'>
        <Presentation />
      </section>
    </main>
  )
}

export default App
