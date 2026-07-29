import { Code2, Briefcase, CheckCircle2, MapPin, Star } from "lucide-react";

function GithubIcon({ size = 13, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.44-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

const TICKER_ITEMS = [
  { icon: GithubIcon, text: "Priya connected GitHub, 3 repos", color: "text-[#1A1A1A]/60" },
  { icon: CheckCircle2, text: "Anish's e-commerce project verified", color: "text-[#3FA34D]" },
  { icon: MapPin, text: "New project request in Pokhara", color: "text-[#1E88E5]" },
  { icon: Star, text: "Sujata received a 5-star review", color: "text-[#F5A623]" },
];

const PROOF_PROFILES = [
  { initials: "PR", name: "Priya R.", role: "Full stack, Kathmandu", accent: "#1E88E5" },
  { initials: "AB", name: "Anish B.", role: "Frontend, Pokhara", accent: "#F5A623" },
  { initials: "SJ", name: "Sujata J.", role: "UI/UX, Kathmandu", accent: "#3FA34D" },
  { initials: "RK", name: "Rajesh K.", role: "Mobile, Lalitpur", accent: "#E8483C" },
];

function Ticker() {
  // Item list is duplicated once so the -50% translate loop is seamless
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="overflow-hidden border-y border-[#1A1A1A]/10 py-2">
      <div className="flex w-max animate-ticker gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 text-xs text-[#1A1A1A]/60"
          >
            <item.icon size={13} className={`shrink-0 ${item.color}`} />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="border-b border-[#1A1A1A]/10 bg-[#FAFAF7] px-4 py-16 text-center sm:px-6 sm:py-20">
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 22s linear infinite;
        }
      `}</style>

      <h1 className="mx-auto max-w-xl text-2xl font-medium leading-snug text-[#1A1A1A] sm:text-3xl">
        Nepali developers, with proof. Nepali clients, with confidence.
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm text-[#1A1A1A]/60">
        The easiest way for Nepali developers to showcase their work and get
        hired.
      </p>

      {/* Dual CTAs — one per audience */}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          className="hover:shadow-lg cursor-pointer flex items-center gap-2 rounded-full border border-[#1E88E5] bg-[#1E88E5] px-5 py-2 text-sm font-medium text-white transition-colors hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#1A1A1A]"
        >
          <Code2 size={16} />
          I&apos;m a developer
        </button>
        <button
          type="button"
          className="hover:shadow-lg cursor-pointer flex items-center gap-2 rounded-full border border-[#1A1A1A]/20 px-5 py-2 text-sm font-medium text-[#1A1A1A] transition-colors hover:border-[#1E88E5] hover:text-[#1E88E5]"
        >
          <Briefcase size={16} />
          I need a developer
        </button>
      </div>

      {/* Signature element — live proof ticker */}
      <div className="mx-auto mt-8 max-w-2xl">
        <Ticker />
      </div>

      {/* Proof grid — real profiles instead of stock art */}
      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
        {PROOF_PROFILES.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-[#1A1A1A]/10 px-3 py-4"
          >
            <div
              className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: p.accent }}
            >
              {p.initials}
            </div>
            <p className="text-sm font-medium text-[#1A1A1A]">{p.name}</p>
            <p className="text-xs text-[#1A1A1A]/50">{p.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}