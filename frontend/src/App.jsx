import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer";

import Team from "./components/Team/Team";

function App() {

  return (
    <Router>
      <div className="page-wrapper">
        <Header />
        <SubHeader />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Our-Team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
