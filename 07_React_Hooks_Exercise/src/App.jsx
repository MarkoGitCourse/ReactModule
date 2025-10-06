import CounterWithLimit from "./components/CounterWithLimit";
import Clock from "./components/Clock";
import ThemeSwitcher from "./components/ThemeSwitcher";
import FocusInput from "./components/FocusInput";
import SearchList from "./components/SearchList";
import ExpensiveCalculator from "./components/ExpensiveCalculator";
import UserNameStorage from "./components/UserNameStorage";

import "./App.css";

function App() {
  return (
    <>
      <ThemeSwitcher />
      <CounterWithLimit />
      <Clock />
      <FocusInput />
      <SearchList />
      <ExpensiveCalculator />
      <UserNameStorage />
    </>
  );
}

export default App;
