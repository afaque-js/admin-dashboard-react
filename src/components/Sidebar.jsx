import "./Sidebar.css";
import SideItems from "./SideItems";
import logo from "../assets/logo.png";
import messi from "../assets/messi.jpg";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <aside
        className={`fixed left-0 top-0 z-50 row-span-2 bg-white text-black p-4 grid grid-rows-[70px_70px_1fr] gap-6 transform transition-transform duration-300 md:static md:translate-x-0 md:w-[250px] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <a href="/dashboard">
            <img src={logo} alt="MyAdmin Dashboard Home" className="w-100" />
          </a>
        </div>
        <div>
          <profile className="bg-white text-black grid grid-flow-col grid-rows-2 place-self-center">
            <img
              src={messi}
              alt="David Grey"
              className="size-12 rounded-full row-span-2 mr-4 place-self-center"
            />
            <h1 className="text-lg">
              <a href="/profile">David Grey</a>
            </h1>
            <h6 className="text-sm">Project Manager</h6>
          </profile>
        </div>
        <div>
          <feature className="grid gap-2">
            <SideItems />
          </feature>

          <button
            onClick={onClose}
            className="absolute right-4 top-4 md:hidden"
          >
            ✕
          </button>
        </div>
      </aside>
    </>
  );
}
