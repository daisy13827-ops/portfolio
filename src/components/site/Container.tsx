export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-[20px] pt-[40px] pb-[40px]">
      {children}
    </div>
  );
}