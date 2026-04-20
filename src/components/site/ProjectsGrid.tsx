export default function ProjectsGrid() {
  const cards = [
    { id: "p1", from: "#2563EB", to: "#22C55E" },
    { id: "p2", from: "#7C3AED", to: "#06B6D4" },
    { id: "p3", from: "#F97316", to: "#EF4444" },
    { id: "p4", from: "#111827", to: "#3B82F6" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {cards.map((c) => (
        <a
          key={c.id}
          href="#"
          aria-label="Project placeholder"
          className="group block overflow-hidden rounded-3xl border border-black/5 bg-white/60 transition"
        >
          <div className="aspect-square w-full overflow-hidden">
            <div
              className="h-full w-full transform-gpu transition duration-200 ease-out group-hover:scale-[1.02]"
              style={{
                backgroundImage: `linear-gradient(135deg, ${c.from}, ${c.to})`,
              }}
            />
          </div>
        </a>
      ))}
    </div>
  );
}

