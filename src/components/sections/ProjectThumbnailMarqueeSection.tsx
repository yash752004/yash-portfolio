import React from "react";
import { useProjects } from "@/hooks/useProjects";

// Fallback dummy data if Firebase has no projects or is still loading
const dummyProjects = [
  { id: "1", title: "Deepr", color: "from-blue-600 to-cyan-500", logo: "D" },
  { id: "2", title: "Reel", color: "from-indigo-600 to-purple-600", logo: "R" },
  {
    id: "3",
    title: "Daycoin",
    color: "from-orange-500 to-yellow-500",
    logo: "D",
  },
  {
    id: "4",
    title: "Neuralink",
    color: "from-neutral-900 to-slate-800",
    logo: "N",
  },
  {
    id: "5",
    title: "Immutable",
    color: "from-emerald-500 to-teal-400",
    logo: "I",
  },
  { id: "6", title: "Dao", color: "from-pink-500 to-rose-500", logo: "D" },
];

const ProjectThumbnailMarqueeSection: React.FC = () => {
  const { projects, loading } = useProjects();

  // Use real projects if available, otherwise dummies
  const displayItems =
    projects && projects.length > 0 ? projects : dummyProjects;

  // Duplicate arrays to ensure seamless infinite loop
  const row1 = [
    ...displayItems,
    ...displayItems,
    ...displayItems,
    ...displayItems,
  ];
  const row2 = [
    ...displayItems,
    ...displayItems,
    ...displayItems,
    ...displayItems,
  ].reverse();

  return (
    <section className="py-16 bg-slate-50 overflow-hidden relative ">
      {/* Title */}
      <div className="text-center mb-10 relative z-10 px-4">
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
          Our Portfolio
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
          SELECTED{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
            WORKS
          </span>
        </h2>
      </div>

      {/* Gradient Fades for Smooth Marquee Edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-6">
        {/* Row 1 - Fast */}
        <div
          className="flex w-fit marquee-left hover:[animation-play-state:paused] gap-6 px-3"
          style={{ animationDuration: "60s" }}
        >
          {row1.map((item, index) => (
            <div
              key={`row1-${item.id}-${index}`}
              className="relative flex-shrink-0 w-[260px] h-[180px] md:w-[320px] md:h-[220px] rounded-2xl overflow-hidden group border border-slate-200 shadow-xl bg-white"
            >
              {item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-br ${(item as any).color} flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform duration-700 ease-out`}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm border border-white/30 shadow-sm">
                    <span className="text-white font-black text-2xl">
                      {(item as any).logo}
                    </span>
                  </div>
                  <span className="text-white font-bold text-xl tracking-wide">
                    {item.title}
                  </span>
                </div>
              )}
              {/* Overlay for real project images */}
              {item.thumbnail && (
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold text-lg">
                    {item.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Row 2 - Slow, Opposite Direction */}
        <div
          className="flex w-fit marquee-left hover:[animation-play-state:paused] gap-6 px-3"
          style={{ animationDuration: "80s", animationDirection: "reverse" }}
        >
          {row2.map((item, index) => (
            <div
              key={`row2-${item.id}-${index}`}
              className="relative flex-shrink-0 w-[260px] h-[180px] md:w-[320px] md:h-[220px] rounded-2xl overflow-hidden group border border-slate-200 shadow-xl bg-white"
            >
              {item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-br ${(item as any).color} flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform duration-700 ease-out`}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm border border-white/30 shadow-sm">
                    <span className="text-white font-black text-2xl">
                      {(item as any).logo}
                    </span>
                  </div>
                  <span className="text-white font-bold text-xl tracking-wide">
                    {item.title}
                  </span>
                </div>
              )}
              {/* Overlay for real project images */}
              {item.thumbnail && (
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold text-lg">
                    {item.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectThumbnailMarqueeSection;
