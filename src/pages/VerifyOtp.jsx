import { useState } from "react";
import API from "../services/api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "../components/ToastProvider";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const handleVerify = async () => {
    if (!state) {
      toast.error("Session expired", "Please register again before verifying OTP.");
      navigate("/");
      return;
    }

    if (!otp) {
      toast.info("OTP required", "Enter the 6-digit code to continue.");
      return;
    }

    try {
      setLoading(true);
      await API.post("/verify-otp", { ...state, otp });
      toast.success("OTP verified", "You can now set your account password.");
      navigate("/set-password", { state });
    } catch (err) {
      toast.error("Verification failed", err.response?.data?.message || "Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-5xl items-center justify-center">
        <div className="grid w-full gap-6 rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <section className="rounded-[1.5rem] bg-slate-900 p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
              One-time code
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight">
              Confirm it&apos;s really you.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              Enter the OTP we just sent and we&apos;ll move you straight to password setup.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-slate-200">Verification tips</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Use the newest OTP if you requested multiple codes.</li>
                <li>Codes expire after a short time for safety.</li>
                <li>Keep this tab open until verification is complete.</li>
              </ul>
            </div>
          </section>

          <section className="flex items-center">
            <div className="w-full px-2 py-4 sm:px-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
                Verify OTP
              </p>
              <h3 className="mt-3 text-3xl font-black text-slate-900">Almost there</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Type the 6-digit code to continue your account setup.
              </p>

              <input
                className="mt-8 w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 text-center text-2xl font-bold tracking-[0.45em] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white"
                placeholder="000000"
                maxLength={6}
                onChange={(e) => setOtp(e.target.value)}
              />

              <button
                onClick={handleVerify}
                disabled={loading}
                className="mt-6 w-full rounded-2xl bg-teal-600 py-3 text-sm font-bold uppercase tracking-[0.25em] text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {loading ? "Verifying..." : "Continue"}
              </button>

              <p className="mt-5 text-sm text-slate-600">
                Need to start again?{" "}
                <Link to="/" className="font-semibold text-teal-700 hover:text-teal-900">
                  Return to registration
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
