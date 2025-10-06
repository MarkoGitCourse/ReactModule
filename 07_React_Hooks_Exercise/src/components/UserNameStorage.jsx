import useLocalStorage from "../hooks/useLocalStorage";

export default function UserNameStorage() {
  // 3. Koristimo naš hook kao da je običan useState
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <h2>Custom Hook Vježba</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Pozdrav {name || "nepoznati korisniče"}</p>
    </div>
  );
}
