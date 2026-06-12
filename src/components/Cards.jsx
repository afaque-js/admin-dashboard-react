export default function Cards({ children, title, className = "" }) {
  return (
    <div className={`border-2 rounded-xl ${className}`}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
