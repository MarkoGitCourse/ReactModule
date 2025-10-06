import { useTheme } from "./components/ThemeContext";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div
        className={
          "min-h-screen shadow-lg rounded-2xl " +
          (theme === "light" ? "bg-gray-100" : "bg-gray-600")
        }
      >
        <h1 className="text-4xl font-bold text-blue-200">Tailwind radi!!!</h1>
        <p
          className={
            "mb-6 " + (theme === "light" ? "text-gray-600" : "text-gray-100")
          }
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus modi nam sed tempore tempora natus, velit eveniet eum
          animi, obcaecati reiciendis, officiis perspiciatis iure nulla eligendi
          fugit quidem corporis vel?
        </p>
        <button
          onClick={toggleTheme}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
        >
          Promijeni temu. Trenutna: {theme}
        </button>
      </div>
    </>
  );
}

export default App;
