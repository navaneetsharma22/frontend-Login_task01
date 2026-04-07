import StaticChatWidget from "../components/StaticChatWidget";

const briefingItems = [
  {
    category: "Policy Watch",
    title: "Closed-door energy talks are shifting regional investment priorities.",
    summary:
      "Member reporting suggests private infrastructure funds are rotating toward grid resilience and storage ahead of the next budget cycle.",
  },
  {
    category: "Capital Desk",
    title: "Late-stage fintech rounds are tightening around profitability narratives.",
    summary:
      "Operators with cleaner balance sheets are attracting premium attention while growth-only stories are losing momentum.",
  },
  {
    category: "Global Risk",
    title: "Freight insurers are repricing routes linked to recurring bottlenecks.",
    summary:
      "Analysts inside the network expect logistics premiums to stay elevated through the next quarter.",
  },
];

const watchlist = [
  { label: "Intel Memos", status: "Restricted", detail: "7 fresh internal notes" },
  { label: "CEO Calendar", status: "Live", detail: "4 briefings this week" },
  { label: "Market Signals", status: "Rising", detail: "12 sectors screened" },
  { label: "Policy Leaks", status: "Tracked", detail: "3 dossiers updated" },
];

const picks = [
  "Why private desks are watching infrastructure debt more closely this month.",
  "The founder interviews that quietly changed investor sentiment this week.",
  "What member-only deal chatter says about the next rotation in tech.",
];

export default function Dashboard() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="relative overflow-hidden rounded-[2.25rem] border border-slate-800 bg-[#07111f] px-6 py-8 text-white shadow-2xl shadow-slate-900/20 sm:px-8 sm:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_24%),linear-gradient(135deg,_rgba(15,23,42,0.92),_rgba(2,6,23,0.98))]" />

          <div className="relative grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                Private Briefing Room
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                Your secured news desk is live.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Verified access unlocks a quieter, sharper newsroom experience built
                for members who want signal over noise, with curated coverage,
                briefings, and internal watchlists in one place.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Access</p>
                  <p className="mt-2 text-2xl font-black text-white">Verified</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Edition</p>
                  <p className="mt-2 text-2xl font-black text-white">Insider PM</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Feed</p>
                  <p className="mt-2 text-2xl font-black text-emerald-300">Curated</p>
                </div>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">
                Member Bulletin
              </p>
              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-sm text-slate-400">Lead Signal</p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    Private capital is leaning defensive, not quiet.
                  </h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">
                  Today&apos;s room tone points to cautious expansion: fewer splashy bets,
                  more disciplined moves around cash flow, regulation, and resilience.
                </p>
                <div className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
                    Session Status
                  </p>
                  <p className="mt-2 text-3xl font-black text-white">Active</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-700">
                  Lead Story
                </p>
                <h3 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-slate-900">
                  Inside the premium briefings shaping tomorrow&apos;s market narratives.
                </h3>
              </div>
              <span className="inline-flex w-fit rounded-full bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white">
                Members Only
              </span>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {briefingItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">
                    {item.category}
                  </p>
                  <h4 className="mt-3 text-xl font-black leading-snug text-slate-900">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
                </article>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <section className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-700">
                Watchlist
              </p>
              <div className="mt-5 space-y-3">
                {watchlist.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.label}</p>
                      <p className="text-sm text-slate-500">{item.detail}</p>
                    </div>
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-white">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-[#fdf7e7] via-white to-[#edf8f7] p-6 shadow-xl shadow-slate-200/50">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
                Editor&apos;s Picks
              </p>
              <div className="mt-5 space-y-4">
                {picks.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/80 p-4 shadow-sm">
                    <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-200/50 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">
              Verification
            </p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">Identity confirmed</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              OTP verification is complete, so this newsroom view is available only
              after a successful secure sign-in flow.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-200/50 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-700">
              Coverage
            </p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">Curated dispatches</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              The layout now feels more like a premium intelligence publication than a
              placeholder account page.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-200/50 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Session
            </p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">Private access live</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Protected routing still controls entry, while the page presentation now
              matches a members-only editorial platform.
            </p>
          </article>
        </section>

        <StaticChatWidget />
      </div>
    </div>
  );
}
