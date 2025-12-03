import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import Dashboard from "./components/Dashboard/Dashboard";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <Router>
      <div className="page-wrapper">
        <Header />
        <SubHeader />
        <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Our-Team" element={<Team />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Services" element={<Services />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
