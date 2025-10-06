import { useState, useCallback } from "react";

// Child komponenta koja prima funkciju kao prop
function NameList({ filterFunc }) {
  console.log("Names render");

  const names = ["Ana", "Marko", "Ivana", "Petar", "Lana"];
  const filtered = filterFunc(names);

  return (
    <ul>
      {filtered.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default function SearchList() {
  const [query, setQuery] = useState("");

  //useCallback sprema funkciju dok se query ne promijeni
  const filterName = useCallback(
    (names) => {
      return names.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
      );
    },
    [query]
  );

  return (
    <div>
      <h2>useCallback vježba</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pretraži imena..."
      />
      <NameList filterFunc={filterName} />
    </div>
  );
}
