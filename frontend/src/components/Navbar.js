import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>
        <span role="img" aria-label="lock">🔒</span> AI IDS/IPS
      </h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/logs" style={styles.link}>Logs</Link>
        <Link to="/attacks" style={styles.link}>Attacks</Link>
        <Link to="/detect" style={styles.link}>Detect Attack</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#222",
    color: "white",
    fontFamily: "Arial, sans-serif"
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    color: "#FFD700",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "color 0.3s",
  }
};

export default Navbar;
