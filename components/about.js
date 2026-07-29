import { Briefcase, Fingerprint } from "lucide-react";

const PILLARS = [
  {
    icon: Briefcase,
    label: "Service",
    description:
      "Clients describe what they need, and get matched with developers who fit their budget, timeline, and location. No more posting in random Facebook groups and hoping someone replies.",
    points: ["Simple project request form", "Matched by skill, budget & city", "Direct contact, no middleman"],
    accent: "#F5A623",
  },
  {
    icon: Fingerprint,
    label: "Identity",
    description:
      "Developers get a real professional presence built on proof, not promises. GitHub activity, verified projects, and client reviews replace an empty resume with something clients can trust.",
    points: ["Portfolio built on real projects", "GitHub-verified activity", "Reviews that build a track record"],
    accent: "#E8483C",
  },
];

export default function About() {
  return (
    <section className="border-b border-black bg-[#FAFAF7] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-black/40">
          About DevNepal
        </p>
        <h2 className="mt-3 text-2xl font-medium uppercase tracking-wide text-black sm:text-3xl">
          We provide service and identity
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-black/60">
          Two problems, one platform: clients who can&apos;t find developers,
          and developers who can&apos;t be found.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.label}
            className="rounded-2xl border border-black/10 p-6 text-left"
          >
            <div style={{backgroundColor: pillar.accent}} className="flex h-10 w-10 items-center justify-center rounded-full text-white">
              <pillar.icon size={18} />
            </div>
            <h3 className="mt-4 text-base font-medium uppercase tracking-wide text-black">
              {pillar.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              {pillar.description}
            </p>
            <ul className="mt-4 space-y-1.5">
              {pillar.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-xs text-black/50"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-black" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 