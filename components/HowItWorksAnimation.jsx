import { Briefcase, Code2 } from "lucide-react";

export default function HowItWorksAnimation() {
  const listItems = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
  const listAccents = ["#1E88E5", "#F5A623", "#3FA34D", "#1E88E5", "#F5A623", "#3FA34D"];

  return (
    <div className="mx-auto max-w-3xl">
      <style>{`
        @keyframes hiw-pill {
          0% { opacity: 0; transform: translateY(6px); }
          15%, 80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-4px); }
        }
        @keyframes hiw-project {
          0% { opacity: 0; transform: translateY(24px); }
          20%, 75% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-16px); }
        }
        @keyframes hiw-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-324px); }
        }
        @keyframes hiw-cursor {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(150px); }
        }
        .hiw-pill1 { animation: hiw-pill 4s ease-in-out infinite; }
        .hiw-pill2 { animation: hiw-pill 4s ease-in-out infinite .5s; }
        .hiw-pill3 { animation: hiw-pill 4s ease-in-out infinite 1s; }
        .hiw-proj1 { animation: hiw-project 5s ease-in-out infinite; }
        .hiw-proj2 { animation: hiw-project 5s ease-in-out infinite 1.2s; }
        .hiw-scroll-list { animation: hiw-scroll 8s linear infinite; }
        .hiw-cursor { animation: hiw-cursor 6s ease-in-out infinite; }
      `}</style>

      <svg
        viewBox="0 0 760 320"
        className="h-auto w-full"
        role="img"
        aria-label="Animation showing a developer building a profile and adding projects on the left, and a client scrolling through and discovering developers on the right"
      >
        <defs>
          <filter id="hiw-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Left panel: developer builds a profile */}
        <rect
          x="20"
          y="20"
          width="320"
          height="280"
          rx="16"
          fill="#fff"
          stroke="rgba(26,26,26,0.12)"
          filter="url(#hiw-shadow)"
        />
        <text x="40" y="50" fontSize="11" fontWeight="500" letterSpacing="1" fill="rgba(26,26,26,0.4)">
          DEVELOPER
        </text>

        <circle cx="56" cy="86" r="14" fill="#1E88E5" />
        <rect x="80" y="78" width="90" height="8" rx="4" fill="#1A1A1A" />
        <rect x="80" y="92" width="60" height="6" rx="3" fill="rgba(26,26,26,0.3)" />

        <g className="hiw-pill1">
          <rect x="40" y="118" width="56" height="20" rx="10" fill="#1E88E5" fillOpacity="0.12" />
          <text x="68" y="132" fontSize="10" textAnchor="middle" fill="#1E88E5">React</text>
        </g>
        <g className="hiw-pill2">
          <rect x="102" y="118" width="56" height="20" rx="10" fill="#3FA34D" fillOpacity="0.12" />
          <text x="130" y="132" fontSize="10" textAnchor="middle" fill="#3FA34D">Node</text>
        </g>
        <g className="hiw-pill3">
          <rect x="164" y="118" width="70" height="20" rx="10" fill="#F5A623" fillOpacity="0.18" />
          <text x="199" y="132" fontSize="10" textAnchor="middle" fill="#B9770E">Tailwind</text>
        </g>

        <text x="40" y="168" fontSize="10" fontWeight="500" letterSpacing="0.5" fill="rgba(26,26,26,0.4)">
          PROJECTS
        </text>
        <g className="hiw-proj1">
          <rect x="40" y="178" width="260" height="42" rx="8" fill="rgba(30,136,229,0.05)" stroke="rgba(30,136,229,0.2)" />
          <rect x="52" y="190" width="90" height="7" rx="3" fill="#1A1A1A" />
          <rect x="52" y="202" width="140" height="5" rx="2.5" fill="rgba(26,26,26,0.3)" />
        </g>
        <g className="hiw-proj2">
          <rect x="40" y="228" width="260" height="42" rx="8" fill="rgba(245,166,35,0.06)" stroke="rgba(245,166,35,0.25)" />
          <rect x="52" y="240" width="110" height="7" rx="3" fill="#1A1A1A" />
          <rect x="52" y="252" width="120" height="5" rx="2.5" fill="rgba(26,26,26,0.3)" />
        </g>

        {/* Connector: profile becomes visible to the client side */}
        <line x1="340" y1="160" x2="420" y2="160" stroke="rgba(26,26,26,0.15)" strokeDasharray="4 4" />

        {/* Right panel: client browses developers */}
        <rect
          x="420"
          y="20"
          width="320"
          height="280"
          rx="16"
          fill="#fff"
          stroke="rgba(26,26,26,0.12)"
          filter="url(#hiw-shadow)"
        />
        <text x="440" y="50" fontSize="11" fontWeight="500" letterSpacing="1" fill="rgba(26,26,26,0.4)">
          CLIENT
        </text>

        <clipPath id="hiw-clip">
          <rect x="440" y="66" width="280" height="210" />
        </clipPath>
        <g clipPath="url(#hiw-clip)">
          <g className="hiw-scroll-list">
            {listItems.map((n, i) => (
              <g key={i} transform={`translate(440, ${66 + i * 54})`}>
                <rect width="280" height="44" rx="10" fill="rgba(26,26,26,0.04)" />
                <circle cx="24" cy="22" r="12" fill={listAccents[n]} />
                <rect x="48" y="14" width="90" height="7" rx="3" fill="#1A1A1A" />
                <rect x="48" y="26" width="60" height="5" rx="2.5" fill="rgba(26,26,26,0.3)" />
              </g>
            ))}
          </g>
        </g>

        {/* Magnifier scanning through profiles */}
        <g className="hiw-cursor" transform="translate(694, 62)">
          <circle cx="8" cy="8" r="7" fill="none" stroke="#1E88E5" strokeWidth="2" />
          <line x1="14" y1="14" x2="20" y2="20" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>

      <div className="mt-4 grid grid-cols-1 gap-2 text-center sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#1A1A1A]/50">
            Developers build a profile and add real projects
          </p>
          <button
            type="button"
            className="mx-auto cursor-pointer flex items-center gap-2 rounded-full border border-[#1E88E5] bg-[#1E88E5] px-5 py-2 text-sm font-medium text-white transition-colors hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#1A1A1A] hover:shadow-lg"
          >
            <Code2 size={16} />
            Make Yours
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#1A1A1A]/50">
            Clients browse and discover verified developers by skill & city
          </p>
          <button
            type="button"
            className="mx-auto cursor-pointer flex items-center gap-2 rounded-full border border-[#1A1A1A]/20 px-5 py-2 text-sm font-medium text-[#1A1A1A] transition-colors hover:border-[#1E88E5] hover:text-[#1E88E5] hover:shadow-lg"
          >
            <Briefcase size={16} />
            Hire
          </button>
        </div>
      </div>
    </div>
  );
}