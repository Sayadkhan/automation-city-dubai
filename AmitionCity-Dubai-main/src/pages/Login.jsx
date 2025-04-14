import React, { useState } from "react";
import axiosInstance from "../api/axios"; // Assuming axios instance is configured

// Example: Replace with an actual travel-themed image URL
const backgroundImageUrl =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"; // Example: Beach sunset

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true); // Set loading state to true

    if (!email || !password) {
      setError("Please enter both email and password.");
      setLoading(false); // Set loading state back to false
      return;
    }

    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      const { token, user } = response.data;

      localStorage.setItem("token", token);

      localStorage.setItem("user", JSON.stringify(user));

      console.log("Login successful!");
      alert(`Welcome back, ${user.name}!`);

      // window.location.href = "/dashboard";
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message ||
          "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    // Main container with background image
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Login Box */}
      <div className="relative z-10 w-full max-w-md p-8 space-y-6 bg-white bg-opacity-95 rounded-xl shadow-xl m-4">
        {/* Title and Subtitle */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Adventure Awaits!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Log in to unlock your next journey.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Error Message Display */}
          {error && (
            <div
              className="p-4 text-sm text-red-700 bg-red-100 border border-red-400 rounded-md"
              role="alert"
            >
              {error}
            </div>
          )}

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading} // Disable button while loading
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              {loading ? "Logging in..." : "Let's Go!"}{" "}
              {/* Show loading state text */}
            </button>
          </div>

          {/* Additional Links */}
          <div className="flex items-center justify-between text-sm">
            <a
              href="/forgot-password"
              className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
            >
              Forgot Password?
            </a>
            <a
              href="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
            >
              Create Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
