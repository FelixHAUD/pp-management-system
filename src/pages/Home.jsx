import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleRegister = (e) => {
    e.preventDefault();
    const role = "customer";
    login(form.email, role, form.name);
    navigate("/customer");
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero / Mission */}
      <section className="bg-blue-100 p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">Welcome to Pooch Palace 🐶</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Our mission is to be Irvine’s premier dog daycare, boarding, grooming, and training center.
          We provide safe, personalized care in a fun and enriching environment where every dog is treated like royalty.
        </p>
      </section>

      {/* Services Offered */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold text-center mb-6">🐾 Our Services</h2>
        <div className="flex flex-wrap gap-6 justify-center max-w-5xl mx-auto">
          {[
            {
              title: "Boarding",
              desc: "Safe, cozy overnight stays so your pup feels right at home.",
            },
            {
              title: "Grooming",
              desc: "Baths, trims, and pawdicures that keep your dog looking fresh.",
            },
            {
              title: "Daycare",
              desc: "Socialize and play in a secure environment all day long.",
            },
            {
              title: "Training",
              desc: "Professional training classes for all ages and behavior types.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="bg-white p-6 rounded shadow text-center border w-60"
            >
              <h3 className="text-xl font-bold text-blue-600">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration / Get Started */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">📬 Get Started Today</h2>
        <form
          onSubmit={handleRegister}
          className="max-w-xl mx-auto space-y-4 bg-gray-100 p-6 rounded shadow"
        >
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Register for Free
          </button>
        </form>
      </section>

      {/* Reviews / Testimonials */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">⭐ Happy Clients</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Jessica R.",
              text: "My dog Max absolutely LOVES daycare at Pooch Palace. I get photos and live cam access. The team is amazing!",
            },
            {
              name: "Eric D.",
              text: "Best grooming in town! They always handle Bella so gently and she comes home looking adorable every time.",
            },
            {
              name: "Nina C.",
              text: "The training classes helped our rescue pup settle in. Highly recommend the team’s professionalism!",
            },
          ].map((review) => (
            <div key={review.name} className="bg-white p-6 rounded shadow">
              <p className="text-sm text-gray-700 mb-3">“{review.text}”</p>
              <p className="text-right font-semibold text-blue-600">- {review.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
