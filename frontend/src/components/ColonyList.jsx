import React from "react";

function ColonyList({ colonies }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-4 text-blue-900">Colonies</h3>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            <th className="border px-4 py-2">Code</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {colonies.map(colony => (
            <tr key={colony._id} className="hover:bg-blue-50">
              <td className="border px-4 py-2">{colony.colony_code}</td>
              <td className="border px-4 py-2">{colony.colony_name}</td>
              <td className="border px-4 py-2">{colony.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ColonyList;