export default function Dashboard() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl items-center">
        <div className="w-full space-y-6">
          <section className="relative overflow-hidden rounded-[2rem] bg-slate-900 px-8 py-10 text-white shadow-2xl shadow-slate-900/15 sm:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,211,94,0.22),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.28),_transparent_24%)]" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
                  Dashboard
                </p>
                <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                  Welcome back. Your account is ready to use.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                  You&apos;ve completed registration, OTP verification, and password setup.
                  This is a strong foundation for expanding into a fuller authenticated product.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-sm">
                <p className="text-sm text-slate-200">Session status</p>
                <p className="mt-2 text-3xl font-black text-white">Active</p>
              </div>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-3">
            <article className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-lg shadow-slate-200/60 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
                Verified
              </p>
              <h3 className="mt-3 text-2xl font-black text-slate-900">Identity confirmed</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                OTP verification has already been completed for this account.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-lg shadow-slate-200/60 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
                Protected
              </p>
              <h3 className="mt-3 text-2xl font-black text-slate-900">Route access enabled</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                The dashboard is only reachable when a local auth token is present.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-lg shadow-slate-200/60 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
                Ready
              </p>
              <h3 className="mt-3 text-2xl font-black text-slate-900">Open for next steps</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                This page is a solid place to grow into profile, settings, and session-aware features.
              </p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
