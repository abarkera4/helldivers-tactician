import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeaponsPage from "./pages/WeaponsPage";
import WeaponDetail from "./pages/WeaponDetail";
import StratagemsPage from "./pages/StratagemsPage";
import StratagemDetail from "./pages/StratagemDetail";
import ArmorPage from "./pages/ArmorPage";
import PerksPage from "./pages/PerksPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weapons" element={<WeaponsPage />} />
        <Route path="/weapon/:id" element={<WeaponDetail />} />
        <Route path="/stratagems" element={<StratagemsPage />} />
        <Route path="/stratagem/:stratagemId" element={<StratagemDetail />} />
        <Route path="/armor" element={<ArmorPage />} />
        <Route path="/perks" element={<PerksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
