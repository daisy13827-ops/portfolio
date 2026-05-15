export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="w-full">
      <div className={`max-w-[1600px] mx-auto px-[20px] ${className}`}>
        {children}
      </div>
    </div>
  );
}