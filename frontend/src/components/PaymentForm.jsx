import React from "react";

function PaymentForm({ formData, onChange, onSubmit, customers }) {
  return (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-bold mb-4 text-yellow-900">Add Payment</h3>
      <div className="space-y-3">
        <select
          name="customer_id"
          value={formData.customer_id}
          onChange={onChange}
          className="border p-2 w-full rounded"
          required
        >
          <option value="">Select Customer</option>
          {customers.map(c => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>
        <input
          name="payment_date"
          type="date"
          value={formData.payment_date}
          onChange={onChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="month"
          value={formData.month}
          onChange={onChange}
          placeholder="Month"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="year"
          type="number"
          value={formData.year}
          onChange={onChange}
          placeholder="Year"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="amount_paid"
          type="number"
          value={formData.amount_paid}
          onChange={onChange}
          placeholder="Amount Paid"
          className="border p-2 w-full rounded"
          required
        />
        <button
          type="submit"
          className="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-800"
        >
          Add Payment
        </button>
      </div>
    </form>
  );
}

export default PaymentForm;