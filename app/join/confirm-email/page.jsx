import React from 'react';

export default function ConfirmEmailPage() {
  return (
    <main
      className="min-h-screen px-8 py-8 flex items-center justify-center text-slate-100"
      style={{
        background:
          'radial-gradient(circle at top left, rgba(78, 196, 255, 0.18), transparent 34%), linear-gradient(180deg, #050b18 0%, #0e1630 100%)',
      }}
    >
      <div className="w-full max-w-280 bg-slate-950/95 border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.25)] rounded-[28px] overflow-hidden">
        <div
          className="px-8 py-6 border-b border-white/10"
          style={{
            background: 'linear-gradient(90deg, rgba(18, 34, 68, 0.95), rgba(9, 18, 36, 0.95))',
          }}
        >
          <div className="flex items-center gap-4">
            <span className="w-13 h-13 rounded-2xl grid place-items-center bg-[linear-gradient(135deg,#4ec6ff,#5b5bff)] text-slate-950 font-extrabold text-base tracking-wider">
              DN
            </span>
            <div>
              <p className="m-0 text-base font-bold tracking-[0.02em]">Dev Nepal</p>
              <p className="mt-1 text-sm text-slate-300">Confirm your email to get started</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 p-10 md:grid-cols-[1.15fr_1fr] sm:p-6">
          <section className="bg-slate-950/90 rounded-3xl p-8 flex flex-col gap-6 sm:p-6">
            <p className="text-cyan-300 text-sm font-bold uppercase tracking-[0.14em]">Email confirmation sent</p>
            <h1 className="m-0 text-[clamp(2rem,2.5vw,2.6rem)] leading-tight">Check your inbox</h1>
            <p className="m-0 text-slate-300 leading-7 text-base">
              We have sent a confirmation link to your email address. Please open your inbox and click the link from Dev Nepal to activate your account.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center min-w-42.5 px-6 py-3 rounded-full font-bold text-slate-950 bg-linear-to-r from-cyan-400 to-violet-500 shadow-[0_18px_32px_rgba(69,201,255,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Open Gmail
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center min-w-42.5 px-6 py-3 rounded-full font-bold text-slate-100 bg-white/5 border border-white/20 transition-transform duration-200 hover:-translate-y-0.5"
              >
                Back to Dev Nepal
              </a>
            </div>
            <div className="border border-white/10 bg-white/5 rounded-[18px] px-5 py-4 text-slate-300 text-sm">
              <strong>Tip:</strong> If you do not see the email, check your spam folder or refresh your inbox.
            </div>
          </section>

          <section className="bg-slate-950/90 rounded-3xl p-8 flex flex-col gap-6 sm:p-6">
            <div className="flex flex-col gap-4">
              <span className="inline-flex px-3 py-1 rounded-full bg-cyan-400/15 text-cyan-200 text-xs font-bold uppercase tracking-[0.12em]">
                Welcome aboard
              </span>
              <h2 className="m-0 text-[clamp(1.6rem,2.1vw,2.2rem)] leading-tight">Dev Nepal helps you build, learn, and connect.</h2>
            </div>
            <p className="m-0 text-slate-300 leading-7 text-base">
              Your journey starts with a clean, responsive experience designed for developers. Explore resources, practice with real projects, and join a community powered by modern tools.
            </p>
            <div className="grid gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 min-h-32.5">
                <h3 className="text-lg mb-2">Modern interface</h3>
                <p className="m-0 text-slate-400">Beautiful layouts and polished interactions across signup, login, and dashboard flows.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 min-h-32.5">
                <h3 className="text-lg mb-2">Developer first</h3>
                <p className="m-0 text-slate-400">Designed for clarity, speed, and consistent branding with Dev Nepal’s logo colors.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 min-h-32.5">
                <h3 className="text-lg mb-2">Stay motivated</h3>
                <p className="m-0 text-slate-400">Focus on your goals with a welcoming onboarding experience and helpful guidance.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
