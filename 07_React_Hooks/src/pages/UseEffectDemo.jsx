import { useState, useEffect, use } from "react";

export default function UseEffectDemo() {
  // 1. State za broj klikova
  const [count, setCount] = useState(0);

  // 2. State za users
  const [users, setUsers] = useState([]);

  // 3. Efekt koji se pokreće kada se count promijeni
  useEffect(() => {
    console.log("Brojač se promijenio: ", count);
  }, [count]); // pokreće se kada se count promijeni

  // 4. Efekt koji se pokreće SAMO jednom - kad se komponenta prvi put učita
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Use Effect Primjer</h2>
      <p>Brojčanik: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Klikni me
      </button>

      <hr />

      <h3>Korisnici sa API-ja</h3>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
