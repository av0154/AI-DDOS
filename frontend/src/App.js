import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LogsList from "./components/LogsList";
import AttacksList from "./components/AttacksList";
import DetectAttack from "./components/DetectAttack";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<LogsList />} />
          <Route path="/attacks" element={<AttacksList />} />
          <Route path="/detect" element={<DetectAttack />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
