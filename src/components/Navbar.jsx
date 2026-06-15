import "./Navbar.css";
import {
  HiEnvelopeOpen,
  HiBellAlert,
  HiMiniPower,
  HiBars3,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import messi from "../assets/messi.jpg";

export default function Navbar() {
  return (
    <nav className="p-4 place-content-center">
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
        <img
          src={messi}
          alt="David Grey"
          className="rounded-full row-span-2 h-10 w-10 ml-6"
        />
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
