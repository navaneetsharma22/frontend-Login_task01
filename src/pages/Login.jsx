import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../components/ToastProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.info("Missing fields", "Enter your email and password to continue.");
      return;
    }

    try {
      const res = await API.post("/login-password", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      toast.success("Login successful", "Welcome back to your dashboard.");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Login failed", err.response?.data?.message || "Please try again.");
    }
  };

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="flex items-center">
          <div className="w-full rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-xl shadow-slate-200/60 backdrop-blur sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
              Welcome back
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Sign in to your account</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Enter the email and password you created after OTP verification.
            </p>

            <div className="mt-8 space-y-4">
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={handleLogin}
              className="mt-6 w-full rounded-2xl bg-slate-900 py-3 text-sm font-bold uppercase tracking-[0.25em] text-white transition hover:bg-slate-700"
            >
              Login
            </button>

            <p className="mt-5 text-sm text-slate-600">
              Need an account first?{" "}
              <Link to="/" className="font-semibold text-teal-700 hover:text-teal-900">
                Register here
              </Link>
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[2rem] bg-teal-950 px-8 py-10 text-white shadow-2xl shadow-teal-950/15 sm:px-10 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,211,94,0.24),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(125,211,252,0.22),_transparent_24%)]" />
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-100">
              Secure login
            </span>
            <h3 className="mt-6 max-w-md text-4xl font-black leading-tight sm:text-5xl">
              Fast access with a calmer, cleaner sign-in flow.
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-teal-100 sm:text-base">
              Your portal keeps the login experience lightweight while still using OTP-based onboarding and JWT sessions behind the scenes.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">One verified identity</p>
                <p className="mt-1 text-sm text-teal-100">
                  Registration and password creation stay tied to your verified contact details.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">Simple session flow</p>
                <p className="mt-1 text-sm text-teal-100">
                  Sign in once, land on the dashboard, and manage the rest from there.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
