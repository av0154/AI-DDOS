import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <span role="img" aria-label="lock"></span> AI-Based IDS/IPS Dashboard
      </h1>
      <p style={styles.subtitle}>
        Monitor logs, detect attacks, and secure your network in real-time.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif"
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
  }
};

export default Home;
