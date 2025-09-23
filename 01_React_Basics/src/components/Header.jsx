// import "./Header.css"

function Header() {
  const appTitle = "Info Kartice";
  const today = new Date().toLocaleDateString("hr-HR");
  const titleStyle = { margin: 0, padding: 0, backgroundColor: "transparent" };

  return (
    <header
      className="main-header"
      style={{
        padding: "24px 16px",
        marginBottom: "10px",
        borderBottom: "1px solid #eaeaea",
      }}
    >
      <h1 style={titleStyle}>{appTitle}</h1>
      <p style={{ opacity: 0.8 }}>Današnji datum: {today}</p>
    </header>
  );
}

export default Header;
