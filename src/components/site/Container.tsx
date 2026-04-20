export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div className="max-w-[1600px] mx-auto px-[20px]">
        {children}
      </div>
    </div>
  );
}