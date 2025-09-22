import React from "react";

function Header({ coloniesCount, customersCount, paymentsCount }) {
  return (
    <header className="mb-8 flex flex-col md:flex-row items-center justify-between">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-0">Dashboard</h2>
      <div className="flex gap-4">
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded font-medium">
          Colonies: {coloniesCount}
        </span>
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded font-medium">
          Customers: {customersCount}
        </span>
        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded font-medium">
          Payments: {paymentsCount}
        </span>
      </div>
    </header>
  );
}

export default Header;