import { useState } from "react";
import API from "../services/api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "../components/ToastProvider";

export default function SetPassword() {
  const [password, setPassword] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSet = async () => {
    if (!state?.email) {
      toast.error("Missing setup details", "Please verify your OTP again before setting a password.");
      navigate("/");
      return;
    }

    if (!password) {
      toast.info("Password required", "Enter a password to finish setup.");
      return;
    }

    try {
      await API.post("/set-password", {
        email: state.email,
        password,
      });
      toast.success("Password set", "Your account is ready. You can log in now.");
      navigate("/login");
    } catch (err) {
      toast.error("Could not save password", err.response?.data?.message || "Please try again.");
    }
  };

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-5xl items-center justify-center">
        <div className="grid w-full gap-6 rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:grid-cols-[1.05fr_0.95fr] md:p-8">
          <section className="flex items-center">
            <div className="w-full rounded-[1.75rem] bg-gradient-to-br from-amber-100 via-white to-teal-100 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-700">
                Final step
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-900">
                Set a password you&apos;ll remember and trust.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                After this, you&apos;ll be ready to sign in directly from the login page.
              </p>

              <div className="mt-8 grid gap-3">
                <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">Make it stronger</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Use a mix of letters, numbers, and a longer phrase if possible.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">Keep it personal</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Avoid easy guesses like your phone number or first name.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex items-center">
            <div className="w-full px-2 py-4 sm:px-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
                Password setup
              </p>
              <h3 className="mt-3 text-3xl font-black text-slate-900">Secure your account</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                This password will be used for your normal sign-in flow.
              </p>

              <input
                type="password"
                className="mt-8 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                onClick={handleSet}
                className="mt-6 w-full rounded-2xl bg-slate-900 py-3 text-sm font-bold uppercase tracking-[0.25em] text-white transition hover:bg-slate-700"
              >
                Save Password
              </button>

              <p className="mt-5 text-sm text-slate-600">
                Prefer to sign in instead?{" "}
                <Link to="/login" className="font-semibold text-teal-700 hover:text-teal-900">
                  Go to login
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
