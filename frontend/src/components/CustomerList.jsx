import React from "react";

function CustomerList({ customers }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
      <h3 className="text-lg font-bold mb-4 text-green-900">Customers</h3>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-green-100">
            <th className="border px-2 py-1">Code</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Mobile</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Address</th>
            <th className="border px-2 py-1">Colony</th>
            <th className="border px-2 py-1">NUID</th>
            <th className="border px-2 py-1">Date</th>
            <th className="border px-2 py-1">Type</th>
            <th className="border px-2 py-1">Plan</th>
            <th className="border px-2 py-1">Charge</th>
            <th className="border px-2 py-1">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c._id} className="hover:bg-green-50">
              <td className="border px-2 py-1">{c.code}</td>
              <td className="border px-2 py-1">{c.name}</td>
              <td className="border px-2 py-1">{c.mobile}</td>
              <td className="border px-2 py-1">{c.email}</td>
              <td className="border px-2 py-1">{c.address}</td>
              <td className="border px-2 py-1">{c.colony_id?.colony_name || ""}</td>
              <td className="border px-2 py-1">{c.nuid_no}</td>
              <td className="border px-2 py-1">{c.connection_date ? new Date(c.connection_date).toLocaleDateString() : ""}</td>
              <td className="border px-2 py-1">{c.connection_type}</td>
              <td className="border px-2 py-1">{c.plan}</td>
              <td className="border px-2 py-1">{c.monthly_charge}</td>
              <td className="border px-2 py-1">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;