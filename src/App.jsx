import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="grid h-screen md:grid-cols-[250px_1fr] grid-rows-[70px_1fr] gap-4">
      {/* <Sidebar isVisible={isVisible} setIsVisible={setIsVisible} />
      <Navbar />
      <Dashboard /> */}

      <div
        className={`fixed inset-0 z-40 bg-slate-900/60 md:hidden ${
          isMobileSidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsMobileSidebarOpen(false)}
      />

      <Sidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />
      <Navbar onMenuClick={() => setIsMobileSidebarOpen(true)} />
      <Dashboard />
    </div>
  );
}
