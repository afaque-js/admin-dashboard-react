import "./Navbar.css";
import {
  HiEnvelopeOpen,
  HiBellAlert,
  HiMiniPower,
  HiBars3,
  HiMagnifyingGlass,
} from "react-icons/hi2";

export default function Navbar() {
  return (
    <nav className="bg-slate-100 p-4 place-content-center">
      <ul className="flex gap-10 items-center">
        <li>
          <HiBars3 className="size-6" />
        </li>
        <li>
          <HiMagnifyingGlass className="size-6" />
        </li>
        <input
          type="search"
          placeholder="Search anything..."
          className="w-full pl-2 text-sm text-gray-900 border border-gray-300 bg-gray-50"
        />
        <li>Photo</li>
        <li className="text-nowrap">David Greymaxx</li>
        <li>
          <HiEnvelopeOpen className="size-6" />
        </li>
        <li>
          <HiBellAlert className="size-6" />
        </li>
        <li>
          <HiMiniPower className="size-6" />
        </li>
      </ul>
    </nav>
  );
}
