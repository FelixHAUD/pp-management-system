import { useAuth } from "../context/AuthContext";

export default function ManagerDashboard() {
  const { user } = useAuth();

  const pendingEmployees = [
    { name: "Tommy Rivera", email: "tommy@poochpalace.com", requested: "Front Desk" },
    { name: "Clara Park", email: "clara@poochpalace.com", requested: "Grooming" },
  ];

  const todayReservations = [
    { dog: "Zoe", service: "Training", time: "10:00 AM" },
    { dog: "Bella", service: "Daycare", time: "12:30 PM" },
    { dog: "Milo", service: "Boarding", time: "4:00 PM" },
  ];

  const operationalStats = {
    checkedIn: 14,
    mostPopularService: "Daycare",
    staffOnShift: 5,
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Welcome, {user?.name} 👋
      </h1>
      <p className="text-gray-600 mb-6">
        You can manage daily operations and staff requests below.
      </p>

      {/* Staff Management */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">🧑‍💼 Pending Employee Access</h2>
        <div className="bg-white rounded shadow p-4 space-y-3">
          {pendingEmployees.map((emp, i) => (
            <div key={i} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">{emp.name}</p>
                <p className="text-sm text-gray-500">{emp.email} - {emp.requested}</p>
              </div>
              <div className="space-x-2">
                <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">Approve</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">Deny</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Today's Reservations */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">📅 Today’s Reservations</h2>
        <div className="bg-white rounded shadow p-4 space-y-2 text-sm">
          {todayReservations.map((res, i) => (
            <div key={i} className="flex justify-between border-b pb-1">
              <span>{res.dog} - {res.service}</span>
              <span className="text-gray-500">{res.time}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Operational Snapshot */}
      <section>
        <h2 className="text-xl font-semibold text-blue-600 mb-3">📈 Operational Snapshot</h2>
        <div className="bg-white rounded shadow p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl text-blue-700 font-bold">{operationalStats.checkedIn}</p>
            <p className="text-sm text-gray-600">Dogs Checked In</p>
          </div>
          <div>
            <p className="text-3xl text-blue-700 font-bold">{operationalStats.mostPopularService}</p>
            <p className="text-sm text-gray-600">Most Popular Service</p>
          </div>
          <div>
            <p className="text-3xl text-blue-700 font-bold">{operationalStats.staffOnShift}</p>
            <p className="text-sm text-gray-600">Staff On Shift</p>
          </div>
        </div>
      </section>
    </div>
  );
}
