import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../components/ToastProvider";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      await API.post("/register", form);
      toast.success("OTP sent", "Check your email or phone for the verification code.");
      navigate("/verify-otp", { state: form });
    } catch (err) {
      toast.error("Could not send OTP", err.response?.data?.message || "Please try again.");
    }
  };

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-900 px-8 py-10 text-white shadow-2xl shadow-slate-900/15 sm:px-10 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(244,211,94,0.28),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(45,212,191,0.28),_transparent_28%)]" />
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
              New account
            </span>
            <h2 className="mt-6 max-w-md text-4xl font-black leading-tight sm:text-5xl">
              Build your secure sign-in space in under a minute.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
              Register with your preferred contact method, receive a one-time passcode,
              and finish setup with a password you control.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold text-amber-200">01</p>
                <p className="mt-2 text-sm text-slate-200">Share your basic details.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold text-amber-200">02</p>
                <p className="mt-2 text-sm text-slate-200">Verify the OTP we send.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold text-amber-200">03</p>
                <p className="mt-2 text-sm text-slate-200">Set your password and enter the app.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center">
          <div className="w-full rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-xl shadow-slate-200/60 backdrop-blur sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
              Create account
            </p>
            <h3 className="mt-3 text-3xl font-black text-slate-900">Let&apos;s get you started</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Use email, phone, or both. We&apos;ll send your OTP to the available channel.
            </p>

            <div className="mt-8 space-y-4">
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white"
                placeholder="Full name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white"
                placeholder="Email address"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white"
                placeholder="Phone number"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="mt-6 w-full rounded-2xl bg-slate-900 py-3 text-sm font-bold uppercase tracking-[0.25em] text-white transition hover:bg-slate-700"
            >
              Send OTP
            </button>

            <p className="mt-5 text-sm text-slate-600">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-teal-700 hover:text-teal-900">
                Sign in here
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
