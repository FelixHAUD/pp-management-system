import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CustomerDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Welcome Message */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          Welcome, {user?.name} 🐾
        </h1>
        <p className="text-gray-600">Glad to have you and your pups back at Pooch Palace!</p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <DashboardCard
          title="Dog Profiles"
          description="View or update your dogs' information."
          onClick={() => navigate("/dogs")}
        />
        <DashboardCard
          title="Reservations"
          description="Make a new reservation for boarding, grooming, or daycare."
          onClick={() => navigate("/reservations")}
        />
        <DashboardCard
          title="Rewards"
          description="Check your current rewards points and redeem them."
          onClick={() => navigate("/rewards")}
        />
        <DashboardCard
          title="Live Feed"
          description="Check in on your dog in real-time via webcam."
          onClick={() => navigate("/live-feed")}
        />
      </div>

      {/* Future: Upcoming reservation preview */}
      <div className="bg-white p-4 rounded shadow max-w-xl">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Upcoming Reservation</h2>
        <p><strong>Service:</strong> Grooming</p>
        <p><strong>Date:</strong> April 26, 2025</p>
        <p><strong>Dog:</strong> Luna</p>
        <p className="text-sm text-gray-500 mt-2">You can manage your bookings from the Reservations tab.</p>
      </div>
    </div>
  );
}

// Mini component for buttons
function DashboardCard({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded shadow cursor-pointer hover:bg-blue-50 transition"
    >
      <h3 className="text-lg font-bold text-blue-600 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
