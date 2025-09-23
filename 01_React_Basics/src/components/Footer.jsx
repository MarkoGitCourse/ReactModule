function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "16px",
        borderTop: "1px solid #eaeaea",
        textAlign: "center",
      }}
    >
      <small>{year} Info Kartice - Sva prava pridržana</small>
    </footer>
  );
}

export default Footer;