import { useState } from 'react'
import './App.css'
import Product from './components/Product'

function App() {
  const [produkte, setProdukte] = useState([
    { id: 1, name: 'HP Laptop', image: '/src/assets/image.png', lagerBestand: 0 },
    { id: 2, name: 'High end Gaming PC', image: '/src/assets/image-2.png', lagerBestand: 0 },
    { id: 3, name: 'Apple iPhone 17 Pro Max', image: '/src/assets/image-3.png', lagerBestand: 0 },
  ])
  const [logbuch, setLogbuch] = useState([])

  const wareneingang = (id) => {
    setProdukte((aktuelleProdukte) =>
      aktuelleProdukte.map((produkt) =>
        produkt.id === id
          ? { ...produkt, lagerBestand: produkt.lagerBestand + 1 }
          : produkt,
      ),
    )
  }

  const warenausgang = (id) => {
    setProdukte((aktuelleProdukte) =>
      aktuelleProdukte.map((produkt) =>
        produkt.id === id && produkt.lagerBestand > 0
          ? { ...produkt, lagerBestand: produkt.lagerBestand - 1 }
          : produkt,
      ),
    )
  }

  const tagesabschluss = () => {
    setLogbuch((aktuelleEintraege) => [
      ...aktuelleEintraege,
      `Tagesabschluss: ${produkte.map((produkt) => `${produkt.name}=${produkt.lagerBestand}`).join(' | ')}`,
    ])
  }

  return (
    <>
      <section id="center">
        {produkte.map((produkt) => (
          <Product
            key={produkt.id}
            name={produkt.name}
            image={produkt.image}
            lagerBestand={produkt.lagerBestand}
            onWareneingang={() => wareneingang(produkt.id)}
            onWarenausgang={() => warenausgang(produkt.id)}
          />
        ))}
        <button onClick={tagesabschluss}>
          Tagesabschluss protokollieren
        </button>
        <div>
          <h5>Logbuch der Tagesabschlüsse</h5>
          <ul>
            {logbuch.map((eintrag, index) => (
              <li key={index}>{eintrag}</li>
            ))}
          </ul>
        </div>
      </section>


    </>
  )
}

export default App
