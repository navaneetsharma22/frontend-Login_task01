import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isDashboard = location.pathname === "/dashboard";
  const getNavLinkClassName = (path) =>
    [
      "rounded-full px-4 py-2 text-sm font-medium transition",
      location.pathname === path
        ? "bg-slate-900 !text-white shadow-sm"
        : "text-slate-700 hover:bg-white hover:text-slate-900",
    ].join(" ");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(token ? "/dashboard" : "/")}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black uppercase tracking-[0.3em] text-amber-300 shadow-lg shadow-slate-900/10"
          >
            A
          </button>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-700">
              Secure Access
            </p>
            <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
              AuthApp Portal
            </h1>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          {!token && (
            <>
              <Link
                to="/"
                className={getNavLinkClassName("/")}
              >
                Register
              </Link>
              <Link
                to="/login"
                className={getNavLinkClassName("/login")}
              >
                Login
              </Link>
            </>
          )}

          {token && (
            <>
              <span className="hidden rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800 sm:inline-flex">
                {isDashboard ? "Signed in" : "Session active"}
              </span>
              <button
                onClick={handleLogout}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
