import { useNavigate } from "react-router-dom";

export default function SideItems({ className = "" }) {
  const navigate = useNavigate();
  const sideItems = [
    "Dashboard",
    "Widget",
    "Apps",
    "Tables",
    "Charts",
    "Settings",
    "Notifications",
    "Popups",
    "Logout",
  ];

  const handleItemClick = (item) => {
    if (item === "Logout") {
      localStorage.removeItem("token");
      navigate("/");
      return;
    }

    // add other side item navigation here if needed
  };

  return (
    <div className="grid grid-flow-row auto-rows-[40px] gap-4">
      {sideItems.map((item) => (
        <div
          key={item}
          onClick={() => handleItemClick(item)}
          className={`cursor-pointer hover:bg-purple-100 border border-gray-300 rounded-lg text-purple-500 text-left place-content-center pl-4 ${className}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
