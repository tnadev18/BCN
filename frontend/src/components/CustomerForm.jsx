import React from "react";

function CustomerForm({ formData, onChange, onSubmit, colonies }) {
  return (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-4 text-green-900">Add Customer</h3>
      <div className="space-y-3">
        <input
          name="code"
          value={formData.code}
          onChange={onChange}
          placeholder="Code"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Name"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="mobile"
          value={formData.mobile}
          onChange={onChange}
          placeholder="Mobile"
          className="border p-2 w-full rounded"
        />
        <input
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Email"
          className="border p-2 w-full rounded"
        />
        <input
          name="address"
          value={formData.address}
          onChange={onChange}
          placeholder="Address"
          className="border p-2 w-full rounded"
        />
        <select
          name="colony_id"
          value={formData.colony_id}
          onChange={onChange}
          className="border p-2 w-full rounded"
          required
        >
          <option value="">Select Colony</option>
          {colonies.map(colony => (
            <option key={colony._id} value={colony._id}>
              {colony.colony_name}
            </option>
          ))}
        </select>
        <input
          name="nuid_no"
          value={formData.nuid_no}
          onChange={onChange}
          placeholder="NUID No"
          className="border p-2 w-full rounded"
        />
        <input
          name="connection_date"
          type="date"
          value={formData.connection_date}
          onChange={onChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="connection_type"
          value={formData.connection_type}
          onChange={onChange}
          placeholder="Connection Type"
          className="border p-2 w-full rounded"
        />
        <input
          name="plan"
          value={formData.plan}
          onChange={onChange}
          placeholder="Plan"
          className="border p-2 w-full rounded"
        />
        <input
          name="monthly_charge"
          type="number"
          value={formData.monthly_charge}
          onChange={onChange}
          placeholder="Monthly Charge"
          className="border p-2 w-full rounded"
        />
        <select
          name="status"
          value={formData.status}
          onChange={onChange}
          className="border p-2 w-full rounded"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Add Customer
        </button>
      </div>
    </form>
  );
}

export default CustomerForm;