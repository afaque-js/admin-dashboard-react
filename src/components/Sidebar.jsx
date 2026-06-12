import "./Sidebar.css";
import SideItems from "./SideItems";

export default function Sidebar() {
  return (
    <aside className="row-span-2 bg-white text-black p-4 h-100% border-2 grid grid-rows-10 gap-6">
      <logo className="border-2">Logo</logo>
      <profile className="bg-white text-black border-2 grid grid-flow-col grid-rows-2 gap-0.5">
        <h1 className="border-2 rounded-full m-1 row-span-2">Photo</h1>
        <h1 className="text-lg border-2">David Grey</h1>
        <h6 className="text-sm border-2">Project Manager</h6>
      </profile>
      <feature className="grid gap-2 row-span-7">
        <SideItems />
      </feature>
    </aside>
  );
}
