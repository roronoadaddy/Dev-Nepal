'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/logo';
import setupProfileAction from './action';
import supabase from '@/utils/supabase/client';

const DARK = '#1A1A1A';
const OFFWHITE = '#F5F5F5';
const GREEN = '#3FA34D';
const BLUE = '#1E88E5';
const ORANGE = '#F5A623';

// Faint topographic contour lines — a quiet nod to Nepal's terrain and to
// the idea of "elevation" as a stand-in for career progress.
function ContourField() {
  const paths = [
    'M-50,80 C150,20 350,140 550,60 C700,10 800,90 900,40',
    'M-50,160 C120,110 300,210 520,150 C680,110 800,180 900,130',
    'M-50,250 C140,200 330,300 540,240 C700,200 800,260 900,220',
    'M-50,340 C130,300 320,380 530,330 C690,300 800,350 900,320',
    'M-50,430 C150,400 340,460 540,420 C700,400 800,440 900,410',
    'M-50,520 C140,500 330,540 540,510 C700,495 800,520 900,500',
  ];
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.05]"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={DARK} strokeWidth="1.5" />
      ))}
    </svg>
  );
}



// Two-dot "waypoint" progress marker. The active step pulses in orange,
// like a live position pin on a trail map; completed steps lock in the
// chosen role's color.
function WaypointTrail({ activeStep, roleColor }) {
  const step1Color = activeStep === 1 ? ORANGE : roleColor || DARK;
  return (
    <>
      <Logo className="w-52 mx-auto h-auto" />

    <div className="flex items-center gap-3 mb-10 select-none">
      <div className="flex items-center gap-2">
        <span
          className="w-2.5 h-2.5 rounded-full relative flex items-center justify-center"
          style={{ backgroundColor: step1Color }}
        >
          {activeStep === 1 && (
            <span
              className="absolute w-2.5 h-2.5 rounded-full animate-ping"
              style={{ backgroundColor: ORANGE, opacity: 0.6 }}
            />
          )}
        </span>
        <span
          className="text-[11px] font-mono uppercase tracking-widest"
          style={{ color: activeStep === 1 ? DARK : `${DARK}90` }}
        >
          Path
        </span>
      </div>

      <div
        className="flex-1 h-px"
        style={{ backgroundColor: activeStep === 2 ? (roleColor || DARK) : `${DARK}20` }}
      />

      <div className="flex items-center gap-2">
        <span
          className="w-2.5 h-2.5 rounded-full relative flex items-center justify-center"
          style={{ backgroundColor: activeStep === 2 ? ORANGE : `${DARK}20` }}
        >
          {activeStep === 2 && (
            <span
              className="absolute w-2.5 h-2.5 rounded-full animate-ping"
              style={{ backgroundColor: ORANGE, opacity: 0.6 }}
            />
          )}
        </span>
        <span
          className="text-[11px] font-mono uppercase tracking-widest"
          style={{ color: activeStep === 2 ? DARK : `${DARK}60` }}
        >
          Details
        </span>
      </div>
    </div>
    </>
  );
}

function FieldInput({ label, name, value, onChange, placeholder, accent }) {
  return (
    <div>
      <label
        className="block text-[11px] font-mono uppercase tracking-widest mb-2"
        style={{ color: `${DARK}80` }}
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full bg-transparent border-0 border-b py-2.5 text-lg outline-none transition-colors duration-200 placeholder:opacity-40"
        style={{
          color: DARK,
          borderColor: `${DARK}25`,
          caretColor: ORANGE,
        }}
        onFocus={(e) => (e.target.style.borderColor = accent)}
        onBlur={(e) => (e.target.style.borderColor = `${DARK}25`)}
      />
    </div>
  );
}

export default function ProfileSetup() {

  const [step, setStep] = useState('role'); // 'role', 'developer', 'recruiter'
  const [formData, setFormData] = useState({
    role: '',
    fullName: '',
    devName: '',
    companyName: '',
  });


  const roleColor = formData.role === 'dev' ? GREEN : formData.role === 'recruiter' ? BLUE : null;

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
    setStep(role === 'dev' ? 'developer' : 'recruiter');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setupProfileAction(new FormData(e.target));
  };

  const handleBack = () => {
    setStep('role');
    setFormData({ role: '', fullName: '', devName: '', companyName: '' });
  };

        const router = useRouter();

    useEffect(() => {
        async function checkProfile() {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (!user) {
                router.replace("/login");
                return;
            }

            const { data: profile, error } = await supabase
                .from("profiles")
                .select("id")
                .eq("id", user.id)
                .maybeSingle();
console.log("user.id:", user.id, "profile:", profile, "error:", error)
            if (error) {
                console.error("Profile check failed:", error);
                return;
            }
            

            if (profile) {
                router.replace("/dashboard");
            }
        }        checkProfile();
    }, [router]);


  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{ backgroundColor: OFFWHITE, fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      <ContourField />

      <div className="w-full max-w-md relative z-10">
        {step === 'role' ? (
          <div>

            <WaypointTrail activeStep={1} roleColor={roleColor} />

            <div className="mb-10">
              <p
                className="text-[11px] font-mono uppercase tracking-widest mb-3"
                style={{ color: ORANGE }}
              >
                Kathmandu · 27.71°N, 85.32°E
              </p>
              <h1
                className="text-4xl leading-tight mb-3"
                style={{ color: DARK, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                Set up your profile
              </h1>
              <p style={{ color: `${DARK}90` }}>
                Choose the path that fits — you can always switch later.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => handleRoleSelect('dev')}
                className="group text-left p-6 rounded-xl border transition-all duration-200 bg-white"
                style={{ borderColor: `${DARK}15` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = GREEN;
                  e.currentTarget.style.boxShadow = `0 8px 24px -8px ${GREEN}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${DARK}15`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4"
                  style={{ backgroundColor: `${GREEN}18`, color: GREEN }}
                >
                  {'</>'}
                </div>
                <h3
                  className="text-lg mb-1"
                  style={{ color: DARK, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  Developer
                </h3>
                <p className="text-sm" style={{ color: `${DARK}75` }}>
                  Build a portfolio, earn trust score, get matched to work.
                </p>
              </button>

              <button
                onClick={() => handleRoleSelect('recruiter')}
                className="group text-left p-6 rounded-xl border transition-all duration-200 bg-white"
                style={{ borderColor: `${DARK}15` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BLUE;
                  e.currentTarget.style.boxShadow = `0 8px 24px -8px ${BLUE}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${DARK}15`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4"
                  style={{ backgroundColor: `${BLUE}18`, color: BLUE }}
                >
                  ⌕
                </div>
                <h3
                  className="text-lg mb-1"
                  style={{ color: DARK, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  Recruiter
                </h3>
                <p className="text-sm" style={{ color: `${DARK}75` }}>
                  Post work, browse verified developers, hire with confidence.
                </p>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <WaypointTrail activeStep={2} roleColor={roleColor} />


            <div className="mb-8">
              <p
                className="text-[11px] font-mono uppercase tracking-widest mb-3"
                style={{ color: roleColor }}
              >
                {step === 'developer' ? 'Developer' : 'Recruiter'}
              </p>
              <h2
                className="text-3xl mb-2"
                style={{ color: DARK, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                {step === 'developer' ? 'A few details' : 'Your hiring profile'}
              </h2>
              <p style={{ color: `${DARK}75` }}>
                {step === 'developer'
                  ? 'This is what clients see first.'
                  : "This is what developers see before they apply."}
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <input type="hidden" name="role" value={formData.role} />
              <FieldInput
                label="Full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your full name"
                accent={roleColor}
              />

              {step === 'developer' ? (
                <FieldInput
                  label="Dev name"
                  name="devName"
                  value={formData.devName}
                  onChange={handleInputChange}
                  placeholder="Your Dev Nepal username"
                  accent={roleColor}
                />
              ) : (
                <FieldInput
                  label="Company name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                  accent={roleColor}
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg font-semibold transition-transform duration-150 active:scale-[0.98]"
              style={{ backgroundColor: roleColor, color: OFFWHITE }}
            >
              Complete profile
            </button>

            <button
              type="button"
              onClick={handleBack}
              className="w-full mt-4 py-2 text-sm font-medium transition-colors"
              style={{ color: `${DARK}60` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
              onMouseLeave={(e) => (e.currentTarget.style.color = `${DARK}60`)}
            >
              ← Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}