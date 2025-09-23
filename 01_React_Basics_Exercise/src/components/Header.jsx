function Header() {
  const title = "Putuj Svijetom";
  const today = new Date().toLocaleDateString("hr-HR");

  return (
    <header style={{ padding: "24px 16px", borderBottom: "1px solid #eaeaea" }}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container justify-content-center text-center">
          <a class="navbar-brand" href="#">
            <h1 style={{ margin: 0 }}>{title}</h1>
            <p style={{ margin: "6px 0", opacity: 0.8 }}>Datum: {today}</p>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
