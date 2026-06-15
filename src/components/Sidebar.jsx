import "./Sidebar.css";
import SideItems from "./SideItems";
import logo from "../assets/logo.png";
import messi from "../assets/messi.jpg";

export default function Sidebar() {
  return (
    <aside className="row-span-2 bg-white text-black p-4 h-100% grid grid-rows-10 gap-6">
      <a href="/">
        <img src={logo} alt="MyAdmin Dashboard Home" className="h-15 w-100" />
      </a>
      <profile className="bg-white text-black grid grid-flow-col grid-rows-2 gap-0.5 pt-1 pb-1 pr-7">
        <img
          src={messi}
          alt="David Grey"
          className="rounded-full row-span-2 h-10 w-10 ml-6"
        />
        <h1 className="text-lg ">David Grey</h1>
        <h6 className="text-sm ">Project Manager</h6>
      </profile>
      <feature className="grid gap-2 row-span-7">
        <SideItems />
      </feature>
    </aside>
  );
}
