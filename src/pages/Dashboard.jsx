import "./Dashboard.css";
import { HiHome, HiOutlineExclamationCircle } from "react-icons/hi2";
import Cards from "../components/Cards";

export default function Dashboard() {
  return (
    <section className="bg-slate-200 p-6 grid grid-cols-3 grid-rows-12 gap-8">
      <Cards className="border-2 col-span-3 row-span-2 flex justify-between p-4">
        <div className="flex gap-2">
          <div className="border-1 p-2">
            <HiHome className="size-6" />
          </div>
          <h1 className="place-content-center">Dashboard</h1>
        </div>
        <div className="flex gap-1 place-items-center">
          <h1>Overview</h1>
          <HiOutlineExclamationCircle className="size-6" />
        </div>
      </Cards>
      <Cards className="row-span-4" title="Sales" />
      <Cards className="row-span-4" title="Orders" />
      <Cards className="row-span-4" title="Visitors Online" />
      <Cards
        className="col-span-2 row-span-6"
        title="Visit and Sales Statistics"
      />
      <Cards className="border-2 row-span-6" title="Traffic Sources" />
    </section>
  );
}
