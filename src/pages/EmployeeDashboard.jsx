import { useAuth } from "../context/AuthContext";

export default function EmployeeDashboard() {
  const { user } = useAuth();

  const mockCheckIns = [
    { dog: "Luna", owner: "Alice Wu", service: "Daycare", status: "Checked In" },
    { dog: "Buddy", owner: "Eric D.", service: "Boarding", status: "Not Checked In" },
  ];

  const mockAppointments = [
    { dog: "Rocky", time: "10:00 AM", service: "Grooming" },
    { dog: "Zoe", time: "1:30 PM", service: "Training" },
    { dog: "Max", time: "4:00 PM", service: "Daycare" },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Greeting */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome, {user?.name} 👋</h1>
      <p className="text-gray-600 mb-6">Here’s your overview for the day.</p>

      {/* Check-In/Out Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">🐾 Dog Check-In / Check-Out</h2>
        <div className="bg-white p-4 rounded shadow space-y-3">
          {mockCheckIns.map((entry, i) => (
            <div
              key={i}
              className="flex justify-between border-b pb-2 text-sm text-gray-700"
            >
              <span>
                <strong>{entry.dog}</strong> ({entry.service}) - Owner: {entry.owner}
              </span>
              <span
                className={`font-semibold ${
                  entry.status === "Checked In" ? "text-green-600" : "text-red-500"
                }`}
              >
                {entry.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Appointments */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">📅 Upcoming Appointments</h2>
        <div className="bg-white p-4 rounded shadow">
          <ul className="space-y-2 text-sm">
            {mockAppointments.map((appt, i) => (
              <li key={i} className="flex justify-between border-b pb-1">
                <span>{appt.dog} - {appt.service}</span>
                <span className="text-gray-500">{appt.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lookup Shortcut */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-blue-600">🔍 Dog Profile Lookup</h2>
        <p className="text-gray-600 text-sm mb-2">Go to the full dog profile management area.</p>
        <a
          href="/dogs"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View Dog Profiles
        </a>
      </section>
    </div>
  );
}
