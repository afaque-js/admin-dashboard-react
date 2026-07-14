import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import ProfileItems from "../components/ProfileItems";

export default function Profile() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="grid h-screen md:grid-cols-[250px_1fr] grid-rows-[70px_1fr] gap-4">
      {/* <Sidebar isVisible={isVisible} setIsVisible={setIsVisible} />
        <Navbar />      <Dashboard /> */}

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
      <ProfileItems />
    </div>
  );
}
