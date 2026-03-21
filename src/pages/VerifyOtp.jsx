import { useState } from "react";
import API from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleVerify = async () => {
    if (!state) {
      alert("Session expired. Please register again.");
      navigate("/");
      return;
    }

    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      setLoading(true);
      await API.post("/verify-otp", { ...state, otp });
      alert("OTP Verified");
      navigate("/set-password", { state });
    } catch (err) {
      alert(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">
          Verify OTP
        </h2>

        <input
          className="w-full mb-3 p-2 border rounded-lg text-center tracking-widest"
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 disabled:bg-gray-400"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
      </div>
    </div>
  );
}