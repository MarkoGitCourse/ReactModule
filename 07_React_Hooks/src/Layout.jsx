import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>All rights reserved 2025</footer>
    </div>
  );
}
