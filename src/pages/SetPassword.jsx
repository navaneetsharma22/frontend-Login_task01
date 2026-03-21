import { useState } from "react";
import API from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";

export default function SetPassword() {
  const [password, setPassword] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSet = async () => {
    try {
      await API.post("/set-password", {
        email: state.email,
        password,
      });
      alert("Password set!");
      navigate("/login");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">
          Set Password
        </h2>

        <input
          type="password"
          className="w-full mb-3 p-2 border rounded-lg"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSet}
          className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
        >
          Save Password
        </button>
      </div>
    </div>
  );
}