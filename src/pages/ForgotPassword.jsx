import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // Simulate email sent
    setSubmitted(true);
    setTimeout(() => {
      navigate("/login"); // pretend we sent them the reset link
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Forgot Password
        </h2>
        {submitted ? (
          <p className="text-green-600 text-center">
            Password reset link sent! Please check your email.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
            >
              Send Reset Link
            </button>
          </form>
        )}
        <p className="text-sm text-center mt-4">
          Remember your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
}
