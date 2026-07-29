import { BadgeCheck } from "lucide-react";

const DEVELOPERS = [
  { initials: "PR", name: "Priya R.", role: "Full stack, Kathmandu", tags: ["React", "Node"], accent: "#1E88E5" },
  { initials: "AB", name: "Anish B.", role: "Frontend, Pokhara", tags: ["Vue", "Tailwind"], accent: "#F5A623" },
  { initials: "SJ", name: "Sujata J.", role: "UI/UX, Kathmandu", tags: ["Figma", "CSS"], accent: "#3FA34D" },
  { initials: "RK", name: "Rajesh K.", role: "Mobile, Lalitpur", tags: ["Flutter", "Firebase"], accent: "#E8483C" },
];

export default function FoundingDevelopers() {
  return (
    <section className="border-b border-[#1A1A1A]/10 bg-[#FAFAF7] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-[#1A1A1A]/40">
          Founding developers
        </p>
        <h2 className="mt-3 text-2xl font-medium uppercase tracking-wide text-[#1A1A1A] sm:text-3xl">
          The first to build their proof here
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-[#1A1A1A]/60">
          A small, curated group of early developers — verified, active, and
          growing their portfolio on DevNepal from day one.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
        {DEVELOPERS.map((dev) => (
          <div
            key={dev.name}
            className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-4 text-center"
          >
            <span
              className="mb-3 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide"
              style={{ borderColor: dev.accent, color: dev.accent }}
            >
              Founding member
            </span>

            <div
              className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: dev.accent }}
            >
              {dev.initials}
            </div>

            <div className="flex items-center justify-center gap-1">
              <p className="text-sm font-medium text-[#1A1A1A]">{dev.name}</p>
              <BadgeCheck size={14} className="shrink-0 text-[#3FA34D]" />
            </div>
            <p className="mt-0.5 text-xs text-[#1A1A1A]/50">{dev.role}</p>

            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              {dev.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#1A1A1A]/5 px-2 py-0.5 text-[11px] text-[#1A1A1A]/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}