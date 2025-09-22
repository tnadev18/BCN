import React from "react";

function ColonyForm({ formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-4 text-blue-900">Add Colony</h3>
      <div className="space-y-3">
        <input
          name="colony_code"
          value={formData.colony_code}
          onChange={onChange}
          placeholder="Colony Code"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="colony_name"
          value={formData.colony_name}
          onChange={onChange}
          placeholder="Colony Name"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="description"
          value={formData.description}
          onChange={onChange}
          placeholder="Description"
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Add Colony
        </button>
      </div>
    </form>
  );
}

export default ColonyForm;