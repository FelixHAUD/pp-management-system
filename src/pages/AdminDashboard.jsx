import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          Welcome back, {user?.name} 👋
        </h1>
        <p className="text-gray-600">Manage your business operations and staff below.</p>
      </div>

      {/* Financial Overview */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📊 Financial Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-medium mb-2">Daily Revenue</h3>
            <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">[Daily Chart]</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-medium mb-2">Weekly Revenue</h3>
            <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">[Weekly Chart]</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-medium mb-2">Yearly Revenue</h3>
            <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">[Yearly Chart]</div>
          </div>
        </div>
      </div>

      {/* Employees Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">👥 Employees</h2>
        <div className="bg-white p-4 rounded shadow">
          <table className="w-full table-auto text-left text-sm">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2 px-3">Name</th>
                <th className="py-2 px-3">Email</th>
                <th className="py-2 px-3">Role</th>
                <th className="py-2 px-3">Privileges</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder row */}
              <tr className="border-t">
                <td className="py-2 px-3">Jane Smith</td>
                <td className="py-2 px-3">jane@poochpalace.com</td>
                <td className="py-2 px-3">Employee</td>
                <td className="py-2 px-3">Can Check-In Dogs</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-3">Mark Johnson</td>
                <td className="py-2 px-3">mark@poochpalace.com</td>
                <td className="py-2 px-3">Manager</td>
                <td className="py-2 px-3">All Permissions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Current Users Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">👨‍👩‍👧‍👦 Current Users</h2>
        <div className="bg-white p-4 rounded shadow">
          <table className="w-full text-sm table-auto">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2 px-3">User</th>
                <th className="py-2 px-3">Email</th>
                <th className="py-2 px-3"># Dogs</th>
                <th className="py-2 px-3">Current Reservation</th>
                <th className="py-2 px-3">Rewards</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
              <td className="py-2 px-3">
                <a href="/admin/users/1" className="text-blue-600 hover:underline">Alice Wu</a>
                </td>
                <td className="py-2 px-3">alice@gmail.com</td>
                <td className="py-2 px-3">2</td>
                <td className="py-2 px-3">Grooming - Apr 26</td>
                <td className="py-2 px-3">450 pts</td>
              </tr>
              <tr className="border-t">
              <td className="py-2 px-3">
                <a href="/admin/users/1" className="text-blue-600 hover:underline">Daniel Kim</a>
                </td>
                <td className="py-2 px-3">dkim@me.com</td>
                <td className="py-2 px-3">1</td>
                <td className="py-2 px-3">Boarding - Apr 30</td>
                <td className="py-2 px-3">120 pts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Advertisement Base */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📣 Advertisement Base</h2>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-600 mb-3">Export or copy this email list for campaigns:</p>
          <div className="bg-gray-100 p-3 rounded text-sm text-gray-700 font-mono">
            alice@gmail.com, dkim@me.com, jane@poochpalace.com, mark@poochpalace.com
          </div>
        </div>
      </div>
    </div>
  );
}
