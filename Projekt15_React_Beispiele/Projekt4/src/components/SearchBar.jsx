function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="language-search">Suche nach einer Programmiersprache</label>
      <input
        id="language-search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Zum Beispiel Python oder JavaScript"
        autoComplete="off"
      />
      <p className="searchbar-hint">Die Liste reagiert direkt auf jede Eingabe.</p>
    </div>
  )
}

export default SearchBar