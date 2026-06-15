import "./Dashboard.css";
import {
  HiHome,
  HiOutlineExclamationCircle,
  HiOutlineArrowTrendingUp,
  HiOutlineBookmark,
  HiOutlineEye,
} from "react-icons/hi2";
import Cards from "../components/Cards";
import SalesChart from "../pages/SalesChart";
import TrafficChart from "../pages/TrafficChart";

export default function Dashboard() {
  return (
    <section className="bg-zinc-100 p-6 grid grid-cols-3 grid-rows-8 gap-8">
      <div className=" border-2 rounded-xl col-span-3 row-span-1 flex justify-between p-4  items-end">
        <div className="flex gap-2">
          <div className="rounded p-2 bg-purple-500">
            <HiHome className="size-6 text-white bg-purple-500" />
          </div>
          <h1 className="place-content-center">Dashboard</h1>
        </div>
        <div className="flex gap-1">
          <h1>Overview</h1>
          <HiOutlineExclamationCircle className="size-6 text-purple-500" />
        </div>
      </div>
      <Cards
        className="row-span-3 bg-orange-200"
        title=" Weekly Sales"
        amount="$ 12,345"
        percent="Increase by 12.5%"
        icon={<HiOutlineArrowTrendingUp className="size-6" />}
      />
      <Cards
        className="row-span-3 bg-blue-200"
        title="Weekly Orders"
        amount=" 45,633"
        percent="Decrease by 5.2%"
        icon={<HiOutlineBookmark className="size-6" />}
      />
      <Cards
        className="row-span-3 bg-green-200"
        title="Visitors Online"
        amount="95,574"
        percent="Increase by 5%"
        icon={<HiOutlineEye className="size-6" />}
      />
      <div
        className="border-2 rounded-xl col-span-2 row-span-4 p-8"
        title="Visit and Sales Statistics"
      >
        {" "}
        <div className="flex justify-between">
          <h1>Visit and Sales Statistics</h1>
          <div className="flex gap-4 justify-end text-xs items-center">
            {
              <HiOutlineExclamationCircle className="size-4 rounded-full bg-purple-500 text-purple-500" />
            }{" "}
            CHN
            {
              <HiOutlineExclamationCircle className="size-4 rounded-full bg-orange-500 text-orange-500" />
            }{" "}
            <h3>USA</h3>
            {
              <HiOutlineExclamationCircle className="size-4 rounded-full bg-blue-500 text-blue-500" />
            }{" "}
            <h4>UK</h4>
          </div>
        </div>
        <SalesChart />
      </div>
      <Cards className="border-2 row-span-4" title="Traffic Sources">
        <TrafficChart />
      </Cards>
    </section>
  );
}
