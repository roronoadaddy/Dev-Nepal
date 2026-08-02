import { logout } from "./logout";

const stats = [
  { title: "Profile completion", value: "82%", hint: "Add your bio to stand out" },
  { title: "Upcoming events", value: "3", hint: "Community meetups this month" },
  { title: "Resources saved", value: "12", hint: "Great momentum this week" },
];

const activity = [
  { title: "Joined the weekly builders circle", time: "2 hours ago" },
  { title: "Saved a new learning resource", time: "Yesterday" },
  { title: "Updated your profile details", time: "2 days ago" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] px-4 py-6 text-[#1A1A1A] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-[28px] border border-[#1A1A1A]/10 bg-white/90 p-6 shadow-[0_20px_80px_-40px_rgba(30,136,229,0.4)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1E88E5]">
                Welcome back
              </p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
                Your DevNepal workspace is ready.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#1A1A1A]/70 sm:text-base">
                Keep building, discover opportunities, and stay connected with the Nepal developer community.
              </p>
            </div>

            <form action={logout}>
              <button
                type="submit"
                className="rounded-full cursor-pointer border border-[#1A1A1A]/15 bg-[#1A1A1A] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#F5A623] hover:text-[#1A1A1A]"
              >
                Log out
              </button>
            </form>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-[28px] border border-[#1A1A1A]/10 bg-linear-to-br from-[#1E88E5]/10 via-white to-[#F5A623]/10 p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1E88E5]">
                  Your focus
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Build momentum this week</h2>
              </div>
              <div className="rounded-2xl bg-white/80 px-3 py-2 text-sm font-medium text-[#1A1A1A]/70">
                +25% growth
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {stats.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#1A1A1A]/10 bg-white/80 p-4">
                  <p className="text-sm text-[#1A1A1A]/60">{item.title}</p>
                  <p className="mt-2 text-2xl font-semibold text-[#1A1A1A]">{item.value}</p>
                  <p className="mt-1 text-sm text-[#1A1A1A]/60">{item.hint}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#1A1A1A]/10 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5A623]">
              Quick actions
            </p>
            <div className="mt-4 space-y-3">
              <button className="flex w-full items-center justify-between rounded-2xl border border-[#1A1A1A]/10 bg-[#FAFAF7] px-4 py-3 text-left transition hover:border-[#1E88E5]/40 hover:bg-[#F5A623]/10">
                <span className="font-medium">Explore events</span>
                <span className="text-sm text-[#1A1A1A]/60">→</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl border border-[#1A1A1A]/10 bg-[#FAFAF7] px-4 py-3 text-left transition hover:border-[#1E88E5]/40 hover:bg-[#F5A623]/10">
                <span className="font-medium">View resources</span>
                <span className="text-sm text-[#1A1A1A]/60">→</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl border border-[#1A1A1A]/10 bg-[#FAFAF7] px-4 py-3 text-left transition hover:border-[#1E88E5]/40 hover:bg-[#F5A623]/10">
                <span className="font-medium">Update profile</span>
                <span className="text-sm text-[#1A1A1A]/60">→</span>
              </button>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-[#1A1A1A]/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1E88E5]">
                Recent activity
              </p>
              <h3 className="mt-2 text-xl font-semibold">What’s been happening</h3>
            </div>
            <a href="#" className="text-sm font-medium text-[#1E88E5] hover:text-[#F5A623]">
              View all
            </a>
          </div>

          <div className="mt-6 space-y-3">
            {activity.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-2xl border border-[#1A1A1A]/10 bg-[#FAFAF7] px-4 py-3">
                <span className="font-medium text-[#1A1A1A]">{item.title}</span>
                <span className="text-sm text-[#1A1A1A]/60">{item.time}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
