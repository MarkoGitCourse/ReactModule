import { createContext, useContext, useState } from "react";

// 1. Kreiramo context za theme
const ThemeContext = createContext();

function Header() {
  // Dohvaćamo theme iz konteksta
  const { theme } = useContext(ThemeContext);
  return <h2>Trenutna tema: {theme}</h2>;
}


export default function ThemeSwitcher() {
    // State za theme 
    const [theme, setTheme] = useState('light');

    // Funkcija za promjenu teme
    function toggleTheme() {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        // Gdje želimo korsititi ThemeContext, moramo omotati komponente u ThemeContext.Provider
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div>
                <h1>useContext vježba - Theme Switcher</h1>
                <Header />
                <button onClick={toggleTheme}>Promijeni temu</button>
            </div>
        </ThemeContext.Provider>
    )
}