import { Briefcase, Code2 } from "lucide-react";

export default function HowItWorksAnimation() {
  const listItems = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];

  return (
    <div className="bg-[#FAFAF7] mx-auto max-w-3xl">
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
          stroke="rgba(0,0,0,0.12)"
          filter="url(#hiw-shadow)"
        />
        <text x="40" y="50" fontSize="11" fontWeight="500" letterSpacing="1" fill="#1E88E5">
          DEVELOPER
        </text>

        <circle cx="56" cy="86" r="14" fill="#1E88E5" />
        <rect x="80" y="78" width="90" height="8" rx="4" fill="#1E88E5" />
        <rect x="80" y="92" width="60" height="6" rx="3" fill="rgba(30,136,229,0.3)" />

        <g className="hiw-pill1">
          <rect x="40" y="118" width="56" height="20" rx="10" fill="rgba(232,72,60,0.15)" />
          <text x="68" y="132" fontSize="10" textAnchor="middle" fill="#E8483C" fontWeight="600">React</text>
        </g>
        <g className="hiw-pill2">
          <rect x="102" y="118" width="56" height="20" rx="10" fill="rgba(63,163,77,0.15)" />
          <text x="130" y="132" fontSize="10" textAnchor="middle" fill="#3FA34D" fontWeight="600">Node</text>
        </g>
        <g className="hiw-pill3">
          <rect x="164" y="118" width="70" height="20" rx="10" fill="rgba(245,166,35,0.2)" />
          <text x="199" y="132" fontSize="10" textAnchor="middle" fill="#F5A623" fontWeight="600">Tailwind</text>
        </g>

        <text x="40" y="168" fontSize="10" fontWeight="500" letterSpacing="0.5" fill="rgba(0,0,0,0.4)">
          PROJECTS
        </text>
        <g className="hiw-proj1">
          <rect x="40" y="178" width="260" height="42" rx="8" fill="rgba(63,163,77,0.06)" stroke="rgba(63,163,77,0.2)" />
          <rect x="52" y="190" width="90" height="7" rx="3" fill="#3FA34D" />
          <rect x="52" y="202" width="140" height="5" rx="2.5" fill="rgba(63,163,77,0.4)" />
        </g>
        <g className="hiw-proj2">
          <rect x="40" y="228" width="260" height="42" rx="8" fill="rgba(232,72,60,0.06)" stroke="rgba(232,72,60,0.2)" />
          <rect x="52" y="240" width="110" height="7" rx="3" fill="#E8483C" />
          <rect x="52" y="252" width="120" height="5" rx="2.5" fill="rgba(232,72,60,0.4)" />
        </g>

        {/* Connector: profile becomes visible to the client side */}
        <line x1="340" y1="160" x2="420" y2="160" stroke="#1E88E5" strokeDasharray="4 4" strokeWidth="2" />

        {/* Right panel: client browses developers */}
        <rect
          x="420"
          y="20"
          width="320"
          height="280"
          rx="16"
          fill="#fff"
          stroke="rgba(0,0,0,0.12)"
          filter="url(#hiw-shadow)"
        />
        <text x="440" y="50" fontSize="11" fontWeight="500" letterSpacing="1" fill="#F5A623">
          CLIENT
        </text>

        <clipPath id="hiw-clip">
          <rect x="440" y="66" width="280" height="210" />
        </clipPath>
        <g clipPath="url(#hiw-clip)">
          <g className="hiw-scroll-list">
            {listItems.map((n, i) => {
              const colors = ["#E8483C", "#3FA34D", "#F5A623", "#1E88E5"];
              const itemColor = colors[i % colors.length];
              return (
                <g key={i} transform={`translate(440, ${66 + i * 54})`}>
                  <rect width="280" height="44" rx="10" fill="rgba(0,0,0,0.03)" />
                  <circle cx="24" cy="22" r="12" fill={itemColor} />
                  <rect x="48" y="14" width="90" height="7" rx="3" fill={itemColor} />
                  <rect x="48" y="26" width="60" height="5" rx="2.5" fill={itemColor} opacity="0.4" />
                </g>
              );
            })}
          </g>
        </g>
      </svg>

      <div className="mt-4 grid grid-cols-1 gap-2 text-center sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-black/50">
            Developers build a profile and add real projects
          </p>
          <button
            type="button"
            className="hover:shadow-lg cursor-pointer w-fit mx-auto flex items-center gap-2 rounded-full border border-[#1E88E5] bg-[#1E88E5] px-5 py-2 text-sm font-medium hover:text-white transition-colors hover:border-[#E8483C] hover:bg-[#E8483C] text-[#1A1A1A]"
          >
            <Code2 size={16} />
            Make Yours
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-black/50">
            Clients browse and discover verified developers by skill & city
          </p>
          <button
            type="button"
            className="hover:shadow-lg cursor-pointer w-fit mx-auto flex items-center gap-2 rounded-full border hover:border-[#E8483C] hover:bg-[#E8483C] px-5 py-2 text-sm font-medium hover:text-white transition-colors border-[#F5A623] bg-[#F5A623] text-[#1A1A1A]"
          >
            <Briefcase size={16} />
            Hire
          </button>
        </div>
      </div>
    </div>
  );
}