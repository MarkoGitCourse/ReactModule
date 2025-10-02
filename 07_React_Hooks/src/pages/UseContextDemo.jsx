import { createContext, useContext, useState } from "react";

// 1. Stvaramo Context objekt
const ThemeContext = createContext("light");

function MojaKomponenta() {
  // 3. Koristimo useContext za dohvat vrijednosti iz ThemeContext
  // const theme = useContext(ThemeContext);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h2>Trenutna tema: {theme}</h2>
      <button onClick={toggleTheme}>Promijeni temu</button>
    </>
  );
}

export default function UseContextDemo() {
  // 2. Omotamo dio aplikacije u Provider i damo vrijednost
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev == 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div>
        <h1>useContext Primjer</h1>
        <MojaKomponenta />
      </div>
    </ThemeContext.Provider>
  );
}
