import { useState, useMemo } from "react";

// Funkcija koja je umjetno spora
function slowDoubling(num) {
  console.log("Izračun u tijeku...");
  for (let i = 0; i < 10000000; i++) {
    // simulacija sporog izračuna
  }

  return num * 2;
}

export default function UseMemoDemo() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState("light");

  // useMemo će spremiti rezultat funkcije dok se number ne promijeni
  const doubled = useMemo(() => slowDoubling(number), [number]);

  return (
    <div>
      <h2>useMemo Primjer</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>Rezultat (2x): {doubled}</p>

      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Promijeni temu ({theme})
      </button>
    </div>
  );
}
