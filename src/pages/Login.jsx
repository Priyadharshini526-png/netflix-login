import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/netflix-logo.jpg";
import bg from "../assets/bg.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post("https://netflix-backend-nneq.onrender.com/login", { email, password });
      if (res.data.success) {
        navigate("/dashboard");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="relative min-h-screen bg-black bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Logo */}
      <img src={logo} alt="Netflix" className="absolute top-5 left-5 w-28" />

      {/* Login Box */}
      <div className="relative z-10 bg-black/80 p-12 rounded w-[350px]">
        <h1 className="text-white text-3xl font-bold mb-6">Sign In</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email or phone number"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-2 rounded font-bold hover:bg-red-700"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-between text-gray-400 text-sm mt-3">
          <label className="flex items-center space-x-1">
            <input type="checkbox" className="accent-red-600" />
            <span>Remember me</span>
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>

        <p className="text-gray-400 mt-6 text-sm">
          New to Netflix?{" "}
          <a href="#" className="text-white hover:underline">
            Sign up now
          </a>
        </p>

        <p className="text-gray-500 mt-3 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </div>
  );
}