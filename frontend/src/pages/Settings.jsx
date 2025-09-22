import React from "react";

function Settings() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Settings</h2>
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-700">General Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Company Name</label>
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="Cable Billing Pvt Ltd"
              disabled
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Admin Email</label>
            <input
              type="email"
              className="border p-2 rounded w-full"
              placeholder="admin@cablebilling.com"
              disabled
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Default Monthly Charge</label>
            <input
              type="number"
              className="border p-2 rounded w-full"
              placeholder="300"
              disabled
            />
          </div>
        </div>
        <div className="mt-8 text-gray-500 text-sm">
          <span>Settings management coming soon...</span>
        </div>
      </div>
    </div>
  );
}

export default Settings;