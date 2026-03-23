import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-blue-650 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-lg font-semibold cursor-pointer"
        onClick={() => navigate("/dashboard")}>
        AuthApp
      </h1>

      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 px-4 py-1 rounded-lg hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
}