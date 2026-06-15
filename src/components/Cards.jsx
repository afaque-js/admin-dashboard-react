export default function Cards({
  amount,
  percent,
  icon,
  children,
  title,
  className = "",
}) {
  return (
    <div className={`border-2 rounded-xl p-8 ${className}`}>
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
