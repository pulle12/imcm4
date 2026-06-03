function List({ languages, searchTerm, total }) {
  const resultText = searchTerm
    ? `Ergebnisse für "${searchTerm}"`
    : 'Alle verfügbaren Sprachen'

  return (
    <section className="" aria-live="polite">
      <div className="list-card__header">
        <div>
          <p className="list-card__eyebrow">Vorgegebene Liste</p>
          <h2>Programmiersprachen</h2>
          <p className="list-card__subtitle">{resultText}</p>
        </div>
        <span className="list-card__count">
          {languages.length} von {total}
        </span>
      </div>

      {languages.length > 0 ? (
        <ul className="language-list">
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">
          Keine Treffer für <strong>{searchTerm}</strong>.
        </p>
      )}
    </section>
  )
}

export default List