// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
  return (
    <div className="grid h-screen grid-cols-[250px_1fr] grid-rows-[70px_1fr] gap-4">
      <Sidebar />
      <Navbar />
      <Dashboard />
    </div>
  );
}
