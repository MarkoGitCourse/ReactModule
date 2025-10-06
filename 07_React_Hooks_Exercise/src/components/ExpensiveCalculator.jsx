import { useState, useMemo } from "react";

function factorial(n) {
  console.log("Računam faktorijel...");
  let result = 1;
  for (let i = 1; i <= n; i++) {
    // umjetno usporenje
    for (let j = 0; j < 1e6; j++) {}
    result *= i;
  }
  return result;
}

export default function ExpensiveCalculator() {
  const [number, setNumber] = useState(10);
  const [theme, setTheme] = useState("light");

  // Koristimo useMemo gdje želimo memorizirati neku
  // vrijednost sve dok se određeni parametar/dependency ne promijeni
  const result = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h2>useMemo vježba</h2>
      <input
        value={number}
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      />

      <p>
        Faktorijel od {number} je: {result}
      </p>

      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Promijeni temu. Trenutna tema: {theme}
      </button>
    </div>
  );
}
