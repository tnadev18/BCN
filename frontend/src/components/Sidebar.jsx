import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col py-8 px-6 shadow-lg min-h-screen">
      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-wide">Cable Billing</h1>
        <p className="text-sm mt-2 text-blue-200">Office Dashboard</p>
      </div>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-blue-800 rounded px-3 py-2">Dashboard</Link>
        <Link to="/colonies" className="hover:bg-blue-800 rounded px-3 py-2">Colonies</Link>
        <Link to="/customers" className="hover:bg-blue-800 rounded px-3 py-2">Customers</Link>
        <Link to="/payments" className="hover:bg-blue-800 rounded px-3 py-2">Payments</Link>
        <Link to="/reports" className="hover:bg-blue-800 rounded px-3 py-2">Reports</Link>
        <Link to="/settings" className="hover:bg-blue-800 rounded px-3 py-2">Settings</Link>
      </nav>
      <div className="mt-auto pt-10 text-xs text-blue-300">
        &copy; {new Date().getFullYear()} Cable Billing
      </div>
    </aside>
  );
}

export default Sidebar;