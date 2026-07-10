export default function Cards({
  amount,
  percent,
  icon,
  children,
  title,
  className = "",
}) {
  return (
    <div
      className={`ease-in-out duration-300 hover:scale-105 rounded-lg grid grid-cols-1 p-8 ${className}`}
    >
      <div className="flex justify-between gap-2 pb-2 items-center">
        {title && <h2>{title}</h2>}
        {icon && <span>{icon}</span>}
      </div>
      {amount && <h1 className="text-3xl pb-10">{amount}</h1>}
      {percent && <h1 className="pt-10">{percent}</h1>}
      {children}
    </div>
  );
}
