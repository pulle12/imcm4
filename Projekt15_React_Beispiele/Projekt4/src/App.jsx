import { useState } from 'react'
import './App.css'

import SearchBar from './components/SearchBar'
import List from './components/List'

const programmiersprachen = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C#',
  'C++',
  'Go',
  'Rust',
  'PHP',
  'Kotlin',
  'Swift',
  'Ruby',
]

function App() {
  const [suchbegriff, setSuchbegriff] = useState('')
  const suchbegriffNormalisiert = suchbegriff.trim()

  const gefilterteSprachen = programmiersprachen.filter((sprache) =>
    sprache.toLowerCase().includes(suchbegriffNormalisiert.toLowerCase()),
  )

  return (
    <main className="app-shell">
      <section className="">
        <div className="hero-row">
          <p className="eyebrow">Projekt 4</p>
          <span className="live-pill">Live Filter</span>
        </div>
        <h1>Programmiersprachen live filtern</h1>
        <p className="intro-text">
          Tippe in das Suchfeld und die Liste passt sich sofort an. Groß- und
          Kleinschreibung spielen dabei keine Rolle.
        </p>
        <SearchBar value={suchbegriff} onChange={setSuchbegriff} />
      </section>

      <List
        languages={gefilterteSprachen}
        searchTerm={suchbegriffNormalisiert}
        total={programmiersprachen.length}
      />
    </main>
  )
}

export default App
