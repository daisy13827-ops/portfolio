export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex justify-start">
      <div className="w-full max-w-[1200px] px-[20px] pt-[40px] pb-[40px]">
        {children}
      </div>
    </div>
  );
}