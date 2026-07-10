import {
  HiHome,
  HiOutlineExclamationCircle,
  HiOutlineArrowTrendingUp,
  HiOutlineBookmark,
  HiOutlineEye,
} from "react-icons/hi2";
import Cards from "./Cards";
import SalesChart from "./SalesChart";
import TrafficChart from "./TrafficChart";

export default function Dashboard() {
  return (
    <section className="bg-zinc-100 p-6 grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="col-span-3 row-span-1 flex justify-between p-4">
        <div className="flex gap-2">
          <div className="rounded place-content-center bg-purple-500">
            <HiHome className="size-5 text-white bg-purple-500 mr-4 ml-4" />
          </div>
          <h1 className="place-content-center">Dashboard</h1>
        </div>
        <div className="flex gap-1 items-center">
          <h1>Overview</h1>
          <HiOutlineExclamationCircle className="size-6 text-purple-500" />
        </div>
      </div>
      <Cards
        className="col-span-3 md:col-span-1 bg-neutral-300"
        title=" Weekly Sales"
        amount="$ 12,345"
        percent="Increase by 12.5%"
        icon={<HiOutlineArrowTrendingUp className="size-6" />}
      />
      <Cards
        className="col-span-3 md:col-span-1 bg-zinc-200"
        title="Weekly Orders"
        amount=" 45,633"
        percent="Decrease by 5.2%"
        icon={<HiOutlineBookmark className="size-6" />}
      />
      <Cards
        className="col-span-3 md:col-span-1 bg-amber-50"
        title="Visitors Online"
        amount="95,574"
        percent="Increase by 5%"
        icon={<HiOutlineEye className="size-6" />}
      />
      <div
        className="ease-in-out duration-300 hover:scale-105  rounded-lg bg-white col-span-3 lg:col-span-1 p-8"
        title="Visit and Sales Statistics"
      >
        {" "}
        <div className="flex-wrap md:flex justify-between">
          <h1>Visit and Sales Statistics</h1>
          <div className="flex-wrap md:flex gap-4 justify-end text-xs items-center">
            <span className="size-4 rounded-full bg-purple-500" />
            CHN
            <span className="size-4 rounded-full bg-orange-500" />
            USA
            <span className="size-4 rounded-full bg-blue-500" />
            UK
          </div>
        </div>
        <SalesChart />
      </div>
      <Cards
        className="bg-white col-span-3 lg:col-span-[1] "
        title="Traffic Sources"
      >
        <TrafficChart />
      </Cards>
    </section>
  );
}
