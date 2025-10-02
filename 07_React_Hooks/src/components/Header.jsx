import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Use State Demo
        </NavLink> 
        {" "}|{" "}
        <NavLink
          to="/use-effect"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Use Effect Demo
        </NavLink> 
        {" "}|{" "}
        <NavLink
          to="/use-context"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Use Context Demo
        </NavLink> 
        {" "}|{" "}
        <NavLink
          to="/use-ref"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Use Ref Demo
        </NavLink> 
        {" "}|{" "}
        <NavLink
          to="/use-callback"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Use Callback Demo
        </NavLink> 
        {" "}|{" "}
        <NavLink
          to="/use-memo"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Use Memo Demo
        </NavLink> 
        {" "}|{" "}
        <NavLink
          to="/custom-hook"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Custom Hooks Demo
        </NavLink> 
      </nav>
    </header>
  );
}
