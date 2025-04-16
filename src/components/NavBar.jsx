import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b w-full sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-4 w-full">

        {/* Left-side links */}
        <div className="flex items-center text-gray-700 text-md">
          <NavLink to="/" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
            Home
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
        </div>

        {/* Right-side: Login/Register + Logo */}
        <div className="flex items-center">
          <NavLink to="/login" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
            Login
          </NavLink>
          <NavLink to="/register" className={({ isActive }) => `${isActive ? "underline text-blue-600" : "hover:text-blue-500"} mx-4`}>
            Register
          </NavLink>
          <div className="text-2xl font-bold text-blue-600 whitespace-nowrap ml-4">
            🐾 Pooch Palace
          </div>
        </div>

      </div>
    </nav>
  );
}
