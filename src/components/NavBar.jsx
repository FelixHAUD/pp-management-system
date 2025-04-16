import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md border-b w-full sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-4 w-full">

        {/* LEFT: Navigation Links */}
        <div className="flex items-center text-gray-700 text-md">
          <NavLink to="/" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
            Home
          </NavLink>

          {user?.role === "customer" && (
            <>
              <NavLink to="/customer" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
                Customer Dashboard
              </NavLink>
              <NavLink to="/dogs" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
                Dogs
              </NavLink>
              <NavLink to="/reservations" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
                Reservations
              </NavLink>
              <NavLink to="/rewards" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
                Rewards
              </NavLink>
              <NavLink to="/live-feed" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
                Live Feed
              </NavLink>
            </>
          )}

          {user?.role === "admin" && (
            <NavLink to="/admin" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
              Admin Dashboard
            </NavLink>
          )}
          {user?.role === "manager" && (
            <NavLink to="/manager" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
              Manager Dashboard
            </NavLink>
          )}
          {user?.role === "employee" && (
            <NavLink to="/employee" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
              Employee Dashboard
            </NavLink>
          )}
        </div>

        {/* RIGHT: Auth buttons and logo */}
        <div className="flex items-center">
          {!user ? (
            <>
              <NavLink to="/login" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
                Login
              </NavLink>
              <NavLink to="/register" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
                Register
              </NavLink>
            </>
          ) : (
            <>
              <span className="text-sm mx-2 text-gray-600">Welcome, {user.name}</span>
              <button
                onClick={logout}
                className="mx-4 text-red-500 hover:underline"
              >
                Logout
              </button>
            </>
          )}

          <div className="text-2xl font-bold text-blue-600 whitespace-nowrap ml-4">
            🐾 Pooch Palace
          </div>
        </div>
      </div>
    </nav>
  );
}
