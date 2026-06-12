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
    <div className="grid gap-2">
      {sideItems.map((item) => (
        <div key={item} className={`border-2 ${className}`}>
          {item}
        </div>
      ))}
    </div>
  );
}
