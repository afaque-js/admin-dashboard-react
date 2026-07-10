export default function SideItems({ className = "" }) {
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
  return (
    <div className="grid grid-flow-row auto-rows-[40px] gap-4">
      {sideItems.map((item) => (
        <div
          key={item}
          className={`hover:bg-purple-100  border border-gray-300 rounded-lg text-purple-500 text-left place-content-center pl-4 ${className}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
